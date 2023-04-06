//  rfc to generate snnipet
import React, { useState } from "react";
import Title from "../components/Title";
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai"

export default function LikeMyPhoto() {

    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0)
    const toggleLike = () => {
        if (like) {
            setLike(false)
            setCount(count - 1)
        } else {
            setLike(true)
            setCount(count + 1)
        }
    }
    return (
        <div>
            <Title text="Like My Photo" />
            <Title text={`Likes ${count}`} classes="subtitle" />
            <div className="card card-dark text-center m-auto" style={{ width: 300, cursor: "pointer", justifyContent: "center" }} onDoubleClick={toggleLike}>
                <div className="card-header">
                    <AiFillSmile className="mr-2" />
                    <small>Dog Photo</small>
                </div>
                <img src={`${process.env.PUBLIC_URL}/508247.jpg`} alt="My Image" style={{ height: "fit-content" }} />
                <div className="card-footer fs-xl d-flex" style={{ justifyContent: "space-between" }}>
                    <AiOutlineComment />
                    {like ? <AiFillHeart className="text-danger" onClick={toggleLike} /> : <AiOutlineHeart onClick={toggleLike} />}
                </div>
            </div>
        </div>
    );
}
