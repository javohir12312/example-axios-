import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ navArr }) => {
  return (
    <div className='container d-flex align-items-center py-3 justify-content-between gap-3'>
      <Link to={'/'}>
        <img src="./assets/images/logo.svg" alt="" />
      </Link>

      <div className="nHam">
        <ul className='list-unstyled d-flex w-50 m-0 p-0 justify-content-between'>
          {navArr.map((item) => {
            return (
              <li key={item}>
                <Link className='text-secondary text-decoration-none text-uppercase' to={`/${item}`}>
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='d-flex align-items-center'>
          <a className='mx-2' href="https://www.instagram.com">
            <img src="./assets/images/insta.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="./assets/images/facebook.svg" alt="" />
          </a>
        </div>

        <input type="text" className="form-control w-25 rounded-4" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

        <div className='d-flex align-items-center'>
          <img className='btn border-0' src="./assets/images/heart.svg" alt="" />
          <img className='btn border-0' src="./assets/images/shop.svg" alt="" />
        </div>
      </div>


      <label className='a' htmlFor="check">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <input className='check' id='check' type="checkbox" name="" />

      <div className="ham">
        <ul className='list-unstyled d-flex w-50 m-0 p-0 justify-content-between'>
          {navArr.map((item) => {
            return (
              <li key={item}>
                <Link className='text-secondary text-decoration-none text-uppercase' to={`/${item}`}>
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='d-flex align-items-center'>
          <a className='mx-2' href="https://www.instagram.com">
            <img src="./assets/images/insta.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img src="./assets/images/facebook.svg" alt="" />
          </a>
        </div>

        <input type="text" className="inp form-control rounded-4" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

        <div className='d-flex align-items-center'>
          <img className='btn border-0' src="./assets/images/heart.svg" alt="" />
          <img className='btn border-0' src="./assets/images/shop.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header

