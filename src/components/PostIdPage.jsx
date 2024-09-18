import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import PostPage from "../UI/SoloPost/PostPage";
import MySpinner from "../UI/spinner/MySpinner";

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isPostsLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id)
		const comments = await PostService.getCommentsById(params.id)
		setPost(response.data)
		setComments(comments.data)
	})
	useEffect(() => {
		fetchPostById()
	}, [])



	return (
		<div>
			{isPostsLoading
				? <MySpinner/> 
				: <PostPage comments={comments} title={post.title} body={post.body}/>
			}
		</div>
	)
}

export default PostIdPage