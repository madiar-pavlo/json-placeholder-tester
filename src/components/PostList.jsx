import React from "react";
import PostItem from "./PostItem";
import Error from "./Error";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({remove, posts, title, postList}) => {
	if(!posts.length){
		return (
			<Error errorMessage='I cant find posts about that'/>
		)
	}
	return(
		<div className="PostList__inner">
		<article className="PostList__content">
			<h1 className="post__title">
				{title}
			</h1>
			<TransitionGroup className="post__list">
					{posts.map((post, index) => 
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
						<PostItem remove={remove} post={post} index={index + 1}/>
					</CSSTransition>
					)}				
			</TransitionGroup>
		</article>
	</div>
	)
}

export default PostList