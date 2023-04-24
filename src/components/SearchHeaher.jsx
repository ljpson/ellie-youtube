import React, { useEffect, useState } from 'react';
import {BsFillSearchHeartFill, BsYoutube} from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeaher() {
    const {keyword} = useParams();

    const navigate = useNavigate();
    const [text , setText] = useState('');
    
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }

    useEffect(() => {setText(keyword || '')}, [keyword])

    return (
        <header>
            <div>
                <Link to='/'>
                    <BsYoutube />
                    <h1 className='text-2xl'>Youtube</h1>
                </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search...' value={text} onChange={handleChange}/>
                <button><BsFillSearchHeartFill /></button>
            </form>
        </header>
    )
}

