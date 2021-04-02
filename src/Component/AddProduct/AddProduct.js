import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css'

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {

        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5050/addBicycle`;
       
           fetch(url, {
               method: 'POST',
               headers: {
                   'content-type': 'application/json'
               },
               body:JSON.stringify(eventData)
           })
           .then(res => console.log('server side respose'));
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'ae9faad2f362606dd9be229a7921e7f4');
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
             <form className='form' onSubmit={handleSubmit(onSubmit)}>
                
               <input className='formInput' name="name" defaultValue="" placeholder="Product Name" ref={register} />
                <br/><br/>
                <input className='formInput' type="text" name="price" placeholder="Price" ref={register} id=""/>
                <br/><br/>
               <input className='formInput' name="exampleRequired" type="file" onChange={handleImageUpload} />
               <br/><br/>
               <input type="submit" />
           </form>
        </div>
    );
};

export default AddProduct;