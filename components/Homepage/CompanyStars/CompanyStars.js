import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CompanyStar from './CompanyStar';

const CompanyStars = () => {
    const [stars, setStars] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/star')
        .then(res => res.json())
        .then(data => setStars(data))
    },[])
    return (
        <div style={{marginTop: '50px'}}>
            <CompanyStar stars={stars}/>
        </div>
    );
};

export default CompanyStars;