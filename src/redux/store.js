import {createStore} from "redux";
import {allReducers} from "./reducers";

//생성
export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(10, store.getState());

//액션은 객체, 타입은 스트링
const action = {
	type:'changeState',
	payload:{
		newState:'new state'
	}
}

store.subscribe( () => console.log(store.getState()) )
store.dispatch(action)

console.log(20, store)
console.log(30, store.getState())