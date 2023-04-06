import React from 'react'



export default function Button({ text = "click", btnClass = "btn-info", icon, onclick }) {
    return <button className={`btn ${btnClass}`} onClick={onclick}>{icon}{text}</button>
}