import React from "react";

const PostComments = ({comments}) => {
	return(
		<div>
		<h3 className="comment__title-about">
			Comments:
		</h3>
			<ul className="comments">
				{comments.map(comment => 
					<li className="comment" key={comment.id}>
						<div className="comment__name">
							<h3 className="comment__title">{comment.name}</h3>
						</div>
						<div className="comment__info">
							<span className="comment__id">{comment.id}</span>
							<div className="comment__body">
								<p>
									{comment.body}
								</p>
							</div>
							<footer className="comment__contact">
								<a className="comment__link" href={['mailto:' + comment.email]}>{comment.email}</a>
							</footer>
						</div>

					</li>
				)}
			</ul>
		</div>
	)
}

export default PostComments