import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  return (
    <div className="App">
      <p>{props.products.length}</p>
      <p>user : {props.user}</p>
      <button onClick={() => props.updateUser('gook')}>액션 디스패치</button>
    </div>
  );
}
//  store의 state를 props로 매핑
const mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽은 state = {product:xxx, user:xxx}
  products: state.products,
  user: state.user
})
// 액션을 디스패치하는 평션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  updateUser: (name) => dispatch(updateUser(name))
})

export default connect(mapStateToProps, mapActionToProps)(App);
