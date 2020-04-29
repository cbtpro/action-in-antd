import React from 'react'
import { Menu } from 'antd'
import './Navigation.css'

export default () => {
    return <>
        <Menu id="nav" mode="horizontal" defaultSelectedKeys={['design']}>
            <Menu.Item key="design">
                设计
            </Menu.Item>
            <Menu.Item key="docs">
                文档
            </Menu.Item>
            <Menu.Item key="components">
                组件
            </Menu.Item>
        </Menu>
    </>
}