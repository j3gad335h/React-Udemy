// rfc to generate snnippet
import React from 'react'
import Title from '../components/Title'


export default function RandomiseColor() {
    const handleClick = (event) => {
        console.log(event.target)
    }
    const handleClickWay2 = (event) => {
        console.log(getRandomColr())
        let body =document.querySelector("body")
        body.style.background=getRandomColr()
        event.target.style.background=getRandomColr()
    }
    function getRandomColr() {
        // Colors are in Hexa Decimal Format
        let letters = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }
    return (
        <div className='container text-center'>
            <Title text="Randomise Color" />
            <div className='d-flex' style={{ justifyContent: 'space-around' }}>
                <button className='btn btn-primary' onClick={(event) => handleClick(event)}>Click Me</button>
                <button className='btn btn-info' onClick={handleClickWay2}>Click Me</button>
                <button className='btn btn-success' onClick={handleClickWay2}>Click Me</button>
            </div>
        </div>
    )
}
