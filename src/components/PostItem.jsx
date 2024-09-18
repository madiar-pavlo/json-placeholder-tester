import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../UI/button/MyButton";

const PostItem = ({remove, ...props}) => {
  const removePost = () => {
    remove(props.post)
  }
  const navigate = useNavigate()
  const transitionToPost = (id) => {
    navigate(`/posts/${id}`, { replace: false })
  }
	return (
		<div className="post">
        <div className="post__content">
          <strong>
					{props.index}. {props.post.title}
          </strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__buttons">
          <MyButton onClick={removePost}>
            Delete
          </MyButton>
          <MyButton onClick={() => transitionToPost(props.post.id)}>
            Read
          </MyButton>
        </div>
    </div>
	)
}

export default PostItem