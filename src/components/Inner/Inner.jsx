import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Inner = () => {

    const { id } = useParams()
    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setPost(response.data);
            setLoad(true)
        });
    }, []);

    console.log(post);
    return (
        <div>
            {
                load ?
                    post.length != 0 ? <li className='item2 border text-decoration-none border-5 p-4 rounded-5'>
                        <div className='box'>
                            <img className='h-50 container' src={post.image} alt="" />
                            <div className='w-75'>
                                <h4 className='text-black'>{post.title}</h4>
                                <p>{post.description}</p>
                            </div>
                        </div>

                        <div className='money-inner'>
                            <p className='money'>{post.price}$</p>
                            <img src="./assets/images/shop.svg" alt="" />
                        </div>
                    </li> : <>NotFound</> : <div className='load'>
                        <img src="./assets/images/Preloader_5.gif" alt="" /></div>
            }
        </div>
    )
}

export default Inner