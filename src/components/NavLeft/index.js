import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import "./index.less"
import MenuConfig from './../../config/menuConfig'

export default class NavLeft extends React.Component{
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map(item => {
            if(item.children) {
                return (
                    <Menu.SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </Menu.SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }


    render(){
        return (
            <div>
                <NavLink to="/home">
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>Imooc MS</h1>
                    </div>
                </NavLink>
                <Menu
                    theme="dark"
                    className="menu-aaa"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
