import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../../../Container/Container';
import './Home.scss'

const Home = () => {
  return (
    <Container>
        <div className="home" dir="rtl">
        <div className="container home-container">
          <h1 className="home-container__title">کیف لینک</h1>
          <p className="home-container__subtitle">
            همه ی آدرس ها رو داخل یه کیف بزار
          </p>
          <div className="home-container__action">
            <Link to={"/auth"} className="home-container__action-btn">
              <button>ورود به حساب</button>
            </Link>
            <Link to={"/"} className="home-container__action-btn">
              <button>راهنمای استفاده</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home