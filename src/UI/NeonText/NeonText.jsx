import React from "react";
import classes from "./NeonText.module.css"

const NeonText = ({children}) => {
	return(
		<div className={classes.neonText}>
			<h1 className="visually-hidden">
				{children}
			</h1>
			<div className={classes['sign-wrap-2']}>
				<span className={classes['sign_word']}>{children}</span>
			</div>
		</div>
	)
}
export default NeonText