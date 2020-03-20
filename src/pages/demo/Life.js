import React from "react"
import {Button} from "antd"
import './index.less'
import Child from './child'

export default class Life extends React.Component{
    state = {
        count:0
    }

    handleAdd=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div className="content-x">
                <p>React生命周期介绍</p>
                <Button type='primary'>antd的按钮</Button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}
