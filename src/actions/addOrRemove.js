export const ADD = "ADD"
export const REMOVE = "REMOVE"


export function addFeature (item){
	return{
		type: ADD,
		payload: item
	}
}

export function discardFeature(item){
	return{
		type: REMOVE,
		payload: item

	}
}