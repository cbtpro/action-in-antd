import React from 'react'
import GitHubButton from 'react-github-button'
import './Github.css'
require('react-github-button/assets/style.css');

export default () => {
    return <GitHubButton id="github-btn" type="stargazers" namespace="cbtpro" repo="antd-in-action" />
}