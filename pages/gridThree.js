import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const GridThree = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL]  = useState(null)
    
    const onSubmit = data => {
        const grid3Data = {
            title: data.title,
            slogan: data.slogan,
            bullet1: data.bullet1,
            bullet2: data.bullet2,
            bullet3: data.bullet3,
            bullet4: data.bullet4,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addGrid3`

        console.log(grid3Data)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(grid3Data)
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
            <h1>This is Grid 3</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue="Title" {...register("title")} />
                    <br/>
                <input className="form-control" defaultValue="Slogan" {...register("slogan")} />
                    <br/>
                <input className="form-control" defaultValue="Bullet 1" {...register("bullet1")} />
                    <br/>
                <input className="form-control" defaultValue="Bullet 2" {...register("bullet2")} />
                    <br/>
                <input className="form-control" defaultValue="Bullet 3" {...register("bullet3")} />
                    <br/>
                <input className="form-control" defaultValue="Bullet 4" {...register("bullet4")} />
                    <br/>
                
                <input className="form-control"  type="file" onChange={handleLogoUpload}  />
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input className="btn btn-warning" type="submit" />
            </form>
        </div>
    );
};

export default GridThree;