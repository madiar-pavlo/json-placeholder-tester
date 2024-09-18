import React from "react";
import PostComments from "../../components/PostComments";
const PostPage = ({comments, title, body}) => {
	return (
		<div className="post-page">
			<section className="post-page__main">
				<div className="post-page__title">
				<h1>{title}</h1>
				</div>
				<div className="post-page__description">
					<p>
						{body}
					</p>					
				</div>
			</section>
			<PostComments comments={comments}/>
		</div>
	)
}
export default PostPage