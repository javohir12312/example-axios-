import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import './Home.scss'

const Home = ({ data }) => {

    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false)
    useEffect(() => {
        axios.get(data).then((response) => {
            setPost(response.data);
            setLoad(true)
        });
    }, []);



    return (
        <>
            {load ?
                <ul className='m d-flex justify-content-between flex-wrap gap-3 list-unstyled'>
                    {post.map(item => {
                        return (
                            <Link className='item border text-decoration-none border-5 p-4 rounded-5' to={`/${item.id}`}>
                                <img className='w-100 h-50 container' src={item.image} alt="" />
                                <h4 className='text-center  text-black'>{item.title}</h4>

                                <div className='money-inner'>
                                    <p className='money'>{item.price}$</p>
                                    <img src="./assets/images/shop.svg" alt="" />
                                </div>
                            </Link>
                        )
                    })}
                </ul> : <div className='load'>
                    <img src="./assets/images/Preloader_5.gif" alt="" /></div>}
        </>
    )
}

export default Home