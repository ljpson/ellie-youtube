import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    const {keyword} = useParams();
    return (
        <div>
            <h1>Videos : {keyword? `👀${keyword}🔍Videos` : 'Videos🔥'}</h1>
        </div>
    );
}

