import React from "react";
import MyButton from "../UI/button/MyButton";

const PageSwitcher = ({pagesArray}) => {
	return (
		<nav>
				{pagesArray.map(p => {
				<MyButton>{p}</MyButton>
				})}
		</nav>
	)
}

export default PageSwitcher