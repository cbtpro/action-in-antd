import React, { useState, useRef, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './SearchBox.css'

export default () => {
    const inputRef = useRef(null)
    const [, setFocused] = useState(false)
    const triggerFocus = (focus) => {
        setFocused(focus)

    }
    useEffect(() => {
        document.addEventListener('keyup', event => {
            if (event.keyCode === 83 && event.target === document.body) {
                inputRef.current.focus()
            }
        })
    }, [])
    return <div id="search-box" className="narrow-mode" onClick={() => { inputRef.current.focus() }}>
        <SearchOutlined />
        <Input ref={inputRef} placeholder="在antd中搜索" onFocus={() => { triggerFocus(true) }} onBlur={() => { triggerFocus(false) }} />
    </div>
}