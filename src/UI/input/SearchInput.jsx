import React from "react";
import classes from "./MyInput.module.css"

const SearchInput = (props) => {
	return (
		<input className={classes.myInput} {...props}/>
	)
}
export default SearchInput