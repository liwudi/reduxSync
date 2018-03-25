/**
 * Created by mapbar_front on 2018/3/25.
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux';

function RequestStart(data) {
    return {
        type: "START",
        arr:data
    }
}
function RequestSuc(data) {
    return {
        type: "SUC",
        arr:data
    }
}
function RequestFail() {
    return {
        type: "FAIL"
    }
}
var url = 'http://datainfo.duapp.com/shopdata/getclass.php';

function fetchAction(url) {
    return dispatch => {
        dispatch(RequestStart([]));
        fetch(url).then(res => {
            console.log(res);
            return res.json();

        }).then(data=>{
            console.log(data)
            dispatch(RequestSuc(data))
        })
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: this.props.store.ListReducers.arr,
            state: this.props.store.ListReducers.status || "START"
        }
    }
    add(){
        this.props.dispatch({
            type: "ADD"
        })
    }
    dec(){
        this.props.dispatch({
            type: 'DEC'
        })
    }
    componentDidMount(){
        setTimeout(()=>{

        },1000);
        this.props.dispatch(fetchAction(url))
    }
    render(){
        console.log('props',this.props)
        return (
            <div className="fx1 wrapper">
                <h1>当前数字是：{this.props.store.reducers}</h1>
                <button onClick={this.dec.bind(this)}>dec</button>
                <button onClick={this.add.bind(this)}>add</button>

                {
                    (this.props.store.ListReducers.status == 'START')?<div>加载中。。。。</div>: null
                }

                <ul>
                    {
                        this.props.store.ListReducers.arr.map((item,index) => {
                            return (
                                <li key={index}>{item.className}</li>
                            )
                        })
                    }
                </ul>


            </div>
        )
    }
}

export default connect((store)=>{
    return {
        store: store
    }
})(App);