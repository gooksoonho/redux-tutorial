// //초기 state를 결정
import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";

export const allReducers = combineReducers({
	product: productReducer,
	user: userReducer
})

// //pure function 상태 정보 리턴
// const reducer = (stats, action) => {
// 	if (action.type === 'changeState'){
// 		return action .payload;
// 	}
// 	return 'state';
// }