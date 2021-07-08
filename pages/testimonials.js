import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Testimonials = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL]  = useState(null)
    
    const onSubmit = data => {
        const testimonialData = {
            quote: data.quote,
            name: data.name,
            position: data.position,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addTestimonial`

        console.log(testimonialData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
        .then(res => console.log('server side response', res))
    }

    const handleLogoUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '2b7ab0f7ea521de26ed946eb18b69ab1');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div>
            <h1>This is Testimonial Section</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue="Quote" {...register("quote")} />
                    <br/>
                <input className="form-control" defaultValue="Name" {...register("name")} />
                    <br/>
                <input className="form-control" defaultValue="Position" {...register("position")} />
                    <br/>
                
                <input className="form-control"  type="file" onChange={handleLogoUpload}  />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default Testimonials;