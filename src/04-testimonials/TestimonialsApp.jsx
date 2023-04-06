import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFilePost } from 'react-icons/bs'
import { FaUserAlt } from "react-icons/fa";
export default function TestimonialsApp() {
    const handleClick = () => {
        alert("clicked")
    }
    const [testimonials, setTestimonial] = useState();
    const [items, setItems] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [testimonials])
    return (
        <div className='container m-auto'>
            <Title text='Testimonials' />
            <Button text='Posts' btnClass='btn-info btn-sm' icon={<BsFilePost />} onclick={() => setTestimonial("posts")} />{" "}
            <Button text='Users' btnClass='btn-info btn-sm' icon={<FaUserAlt />} onclick={() => setTestimonial("Users")} />{" "}
            <Button text='Comments' btnClass='btn-info btn-sm' icon={<FaUserAlt />} onclick={() => setTestimonial("Comments")} />
            <Title classes={'subtitle text-primary'} text={testimonials ? testimonials : "Please Select One From Above"} />
            {!Array.isArray(items) ? null : items.map((item) => {
                return (
                    <div className='card card-primary mb-2 text-center' key={item.id}>
                        {item.name && <h2 className='card-header'>{item.name}</h2>}
                        <div className='card-body'>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                        {item.email && <small className='card-footer'>{item.email}</small>}
                    </div>

                )
            })}
        </div>
    )
}
