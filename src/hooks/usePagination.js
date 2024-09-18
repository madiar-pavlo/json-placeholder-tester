import { useMemo } from "react";

export const usePagination = (totalPage) => {
	return useMemo(() => {
		const components = []
		for (let i = 0; i < totalPage; i++) {
			components.push(i + 1)
		}
		
		return components
	}, [totalPage])
}