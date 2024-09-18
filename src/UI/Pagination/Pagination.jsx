import React from "react";
import { usePagination } from "../../hooks/usePagination";

const Pagination = ({totalPage, page, setPage}) => {
	let pagesArray = usePagination(totalPage)

	return (
		<nav className="page__list">
			{pagesArray.map(p => 
				<button key={p} 
				onClick={() => setPage(p)}
				className={
					page === p 
						? 'page page__active' 
						: 'page'}>
					{p}
				</button>
			)}        
		</nav>
	)
}

export default Pagination