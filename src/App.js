import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card'
import FormTime from './components/FormTime'
import point from "./images/point.svg"
import speed from "./images/speed.png"
import weight from "./images/weight.png"
import bomb from "./images/bomb.png"
import Reviews from './components/Review';
import Form from './components/Form';

import review1 from './images/review1.png';
import review2 from './images/review2.png';
import review3 from './images/review3.png';

import myGif from './images/video.gif';

const Start = () => {
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return(
    <div id="about" className='header'>
      <div className='container'>
        <h1 className={`fade-in-container ${isVisible ? 'visible' : ''}`} >орешник</h1>
        </div>
    </div>
  );
}

const About = () => (
  <div id="about" style={{  backgroundColor: 'white' }}>
    <div className='container'>
      <h2>О ракете</h2>
      <p>
      «Оре́шник» — российский экспериментальный подвижный грунтовый ракетный комплекс и одноимённая баллистическая ракета средней дальности, название которой впервые произнёс 21 ноября 2024 года президент России Владимир Путин после ракетного удара по Днепру в ходе российского вторжения в Украину. Первая в мире ракета средней дальности с разделяющейся головной частью, применённая в боевых условиях. По оценкам военных экспертов, «Орешник» является модификацией комплекса РС-26 «Рубеж»
      </p>
    </div>
  </div>
);

const Example = () => (
  <div id="example" style={{ backgroundColor: '#d0d0d0' }}>
      <div className='container'>
      <h2>Примеры работ</h2>
      <img src={myGif} alt="Описание GIF" style={{ width: '100%', height: 'auto' }} />
    </div>
  </div>
);

const Abbility = () => (
  <div id="abbility" style={{ backgroundColor: 'white' }}>
      <div className='container'>
      <h2>Ключевые возможности</h2>
      <div className='card-flex'>
        <Card title="5,5 тыс.км" img={point} text='Максимальная дистанция поражения'/>
        <Card title="12380 км/час" img={speed} text='Максимальная скорость полета'/>
        <Card title="1,5 тонны" img={weight} text='Боевая часть'/>
        <Card title="900 килотонн" img={bomb} text='Заряды в ядерном исполнении'/>
        </div>
    </div>
  </div>
);

const Time = () => (
  <div id="time" style={{ height: '100vh', backgroundColor: 'white' }}>
    <div className='container'>
      <h2>Расчитать время прибытия</h2>
      <FormTime/>
      </div>
  </div>
);

const Review = () => (
  <div id="review" style={{  backgroundColor: '#d0d0d0' }}>
    <div className='container'>
      <h2>Отзывы</h2>
        <Reviews 
          image={review1} 
          text="Президент Украины Владимир Зеленский назвал удар «серьезным увеличением масштаба и жестокости этой войны, циничным нарушением Россией Устава ООН», а также заявил, что мир должен жестоко отреагировать на расширение войны, но «сейчас сильной реакции мира нет»" />
        <Reviews
          image={review2}
          text="Канцлер Германии Олаф Шольц назвал ситуацию «ужасной эскалацией» и заявил, что для того, чтобы избежать усиления конфронтации между Россией и НАТО, его страна не намерена отправлять Украине крылатые ракеты Taurus"
        />
        <Reviews
          image={review3}
          text="Пресс-секретарь Генерального секретаря ООН Стефан Дюжаррик назвал российский удар «тревожным и пугающим развитием» и призвал деэскалировать ситуацию"
        />
      </div>
  </div>
);

const Order = () => (
  <div id="order" style={{ height: '130vh', backgroundColor: 'white' }}>
    <div className='container'>
      <h2>Форма заказа</h2>
      <Form/>
      </div>
  </div>
);

const Footer = () => (
  <div id="footer" style={{  backgroundColor: 'black' }}>
      <p>Неофициальный сайт</p>
  </div>
);

const App = () => {
  return (
      <Router>
          <Navbar />
          <Start />
          <About />
          <Example />
          <Abbility />
          <Time />
          <Review />
          <Order/>
          <Footer/>
      </Router>
  );
};

export default App;
