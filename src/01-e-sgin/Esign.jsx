import React, { useState } from "react";
import Title from "../components/Title";
export default function EsignatureApp() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("Date");
    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleDateChange = (e) => {
        console.log(e.target.value)
        setDate(e.target.value)
    }
    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0",
    }
    document.body.style.background = '#eee';
    return (
        <div className="container text-center">
            <Title text={name} />
            <Title text={date} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque iure libero nobis id.
                Neque provident ea et itaque est voluptates voluptas possimus tenetur totam,
                hic inventore iusto, doloribus dolorum autem!</p>
            <footer className="d-flex" style={{
                justifyContent: "space-around", position: "relative",
                top: "40vh"
            }}>
                <input type="date"  onChange={handleDateChange}/>
                <input type="text"  onChange={handleNameChange} />
            </footer>

        </div>
    )
}