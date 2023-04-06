import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Title({ text = "", classes = "" }) {
    return (
        <h1 className={!classes ? 'container text-center' : classes}>{!text ? "Name" : text}</h1>
    )
}
