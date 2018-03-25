/**
 * Created by mapbar_front on 2017/11/18.
 */

import React,{ Component } from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleWare from 'redux-thunk'
import App from './App';


function add(){
    return {
        type: "ADD"
    }
}
function dec() {
    return {
        type: "DEC"
    }
}


//reducers1
const reducers = (state = 0, action)=>{
    switch (action.type){
        case "ADD":
            return state+1;
            break;
        case "DEC":
            return state-1;
            break;
        default:
            return state
    }
};
//reducers2
const ListReducers = (state={status:'start',arr:[]},action) => {
    switch (action.type){
        case "START":
            return Object.assign({},...state,{status:"START",arr:[]});
            break;
        case "SUC":
            return Object.assign({},...state,{status:"SUC",arr:action.arr});
            break;
        default:
            return Object.assign(state,{status:"START"})
    }
};
const reducerss = combineReducers({reducers,ListReducers});
const store = createStore(reducerss,applyMiddleware(
    thunkMiddleWare
));
console.log(store.getState());


class Pro extends Component{

    render(){
        return (
            <Provider store={store}>
                <App/>
            </Provider>

        )
    }
}
render(<Pro />,document.getElementById('root'));


