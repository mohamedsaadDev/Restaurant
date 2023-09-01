import React,{useRef} from 'react'
import "./Loading.css"
const Loading = () => {
    const showloding = useRef()
    window.onload = function(){
        showloding.current.style.display = "none"
    } 
    return (
        <div ref={showloding} className='container-loading'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading