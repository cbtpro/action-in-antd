import React from 'react'

import { Row, Col, Select, Button } from 'antd'
import Navigation from './Navigation'
import Github from './Github'
import SearchBox from './SearchBox'

import './index.css'

export default () => {
    return <>
        <header id="header">
            <Row style={{ flexFlow: 'nowrap', height: '64px', lineHeight:'64px' }}>
                <Col className="logo-col">
                    <div id="logo">
                        <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                        Ant Design
                    </div>
                </Col>
                <Col flex="auto" className="menu-row">
                    <SearchBox key="searchBox" />
                    <Navigation key="navigation" />
                    <Select defaultValue="v0.0.2" size="small" key="version">
                        <Select.Option value="v0.0.2" key="v0.0.2">V0.0.2</Select.Option>
                        <Select.Option value="v0.0.2" key="v0.0.2">V0.0.1</Select.Option>
                    </Select>
                    <Button key="changeLanguage">English</Button>
                    <Github key="github" />
                </Col>
            </Row>
        </header>
    </>
}