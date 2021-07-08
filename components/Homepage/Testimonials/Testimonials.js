import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/testimonial')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Dont just take our word for it...</h1>
            <Testimonial testimonials={testimonials} />
        </div>
    );
};

export default Testimonials;