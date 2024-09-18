import React from "react";
import MySelect from "../UI/select/MySelect";
import MyInput from "../UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
	return (
	<aside className="post-filter">
		<MyInput placeholder="Enter Name Of Post..."
		value={filter.query}
		onChange={e => setFilter({...filter, query: e.target.value})}/>
		
		<MySelect
			value={filter.sort}
			defaultValue="Hujna"
			options={[
				{value: 'title', name: "Of Value"},
				{value: 'body', name: "Of Description"},
			]}
			onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
			/>
	</aside>
	)
}
export default PostFilter