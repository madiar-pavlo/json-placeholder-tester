import React from "react";
import classes from "./MyModal.module.css"

const MyModal = ({closeModal, children, ...props}) => {
	return (
		<dialog onClick={closeModal} aria-labelledby='Create Post' open={false} className={classes.MyModal} {...props}>
			<section className={classes.section} onClick={e => e.stopPropagation()}>
				{children}
			</section>
		</dialog>
	)
}

export default MyModal