import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import MySpinner from "../UI/spinner/MySpinner";
import { useFetching } from "../hooks/useFetching";
import Error from "../components/Error";
import { getCount0fPages } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../UI/select/MySelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [modalClosed, setIsModalClosed] = useState(true)
  const lastElement = useRef();
  const modalRef = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAllByLimit(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPage(getCount0fPages(totalCount, limit));
  });

  useObserver(page < totalPage, isPostsLoading, lastElement, () => {
    setPage((page) => page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    onClickCloseModal();
  };

  const removePost = (post) => {
    setPosts(posts.filter((e) => e.id !== post.id));
  };

  const onOpenModalClick = () => {
    modalRef.current.showModal();
    modalRef.current.style.display = "flex";
  };
  const onClickCloseModal = () => {
    modalRef.current.close();
    modalRef.current.style.display = "";
  };

  return (
    <div className='App'>
      <div className='forms'>
        <MyButton onClick={onOpenModalClick}>Create Post</MyButton>
        <MyModal  ref={modalRef}>
          <PostForm create={createPost} />
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter} />
        <MySelect
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue='Count of posts in Page'
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 25, name: "25" },
            { value: -1, name: "All" },
          ]}
        />
      </div>
      <hr style={{ marginBlock: 15 + "px", width: "100%" }} />
      {postError && <Error errorMessage='Pizdec...' />}
      <PostList
        remove={removePost}
        posts={searchAndSortedPosts}
        title={"Tuziks"}
      />
      <div
        ref={lastElement}
        style={{
          height: 1,
          marginBlock: 30,
          background: "#8E6CEF",
          width: "100%",
        }}
      ></div>
      {isPostsLoading && (
        <div className='spinner_inner'>
          <MySpinner />
        </div>
      )}
    </div>
  );
};

export default Posts;
