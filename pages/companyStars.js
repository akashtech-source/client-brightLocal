import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CompanyStars = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL]  = useState(null)
    
    const onSubmit = data => {
        const grid1Data = {
            star: data.star,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addStar`

        console.log(grid1Data)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(grid1Data)
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
            <h1>This is tool section</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue="Star" {...register("star")} />
                    <br/>
                
                <input className="form-control"  type="file" onChange={handleLogoUpload}  />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default CompanyStars;