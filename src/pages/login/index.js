import React from 'react'
import {Form, Input, Button} from 'antd'
// import Footer from '../../components/Footer'
import './index.less'
const FormItem = Form.Item;

export default class Login extends React.Component {
    state = {};

    componentDidMount() {//每次进入登录页清除之前的登录信息

    }

    loginReq = (params) => {
        window.location.href = '/#/';
    };

    render() {
        return (
            <div className="login-page">
                <div className="login-header">
                    <div className="logo">
                        <img src="/assets/imooc.png" alt="慕课后台管理系统"/>
                        React全家桶+AntD 共享经济热门项目后台管理系统
                    </div>
                </div>
                <div className="login-content-wrap">
                    <div className="login-content">
                        <div className="word">共享出行 <br />引领城市新经济</div>
                        <div className="login-box">
                            <div className="error-msg-wrap">
                                <div
                                    className={this.state.errorMsg?"show":""}>
                                    {this.state.errorMsg}
                                </div>
                            </div>
                            <div className="title">慕课欢迎你</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
