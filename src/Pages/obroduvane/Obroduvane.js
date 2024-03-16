import React from 'react'
import './Obroduvane.css'
import Footer from "../../components/Footer/Footer";

const Obroduvane = () => {
  return (
    <div>
      <div className='obroduvane'>
        <div className='obroduvane_top'>
        <div className='obroduvane_img1'>
        <div className='text'>
        <h1>Оборудования</h1>
          <p>по группам</p>
        </div>
        <img  src="./images/rasmobnov.png" alt=""/>
        </div>
          <div className='obroduvane_text1'>
            <h2>Хроматография и масспектрометрия</h2>
            <p>Оптические и стилусные профилометры</p>
       <p><span style={{color: "blue"}}>Наномеханические испытания</span></p>
            <p>РФЭ и Оже-спектрометры</p>
            <p>Системы мик	роанализа для электронных микроскопов</p>
            <p>Субмикронная ИК-спектроскопия</p>
            <p>Сканирующая зондовая микроскопия</p>
            <p>Анализаторы толщины пленок Filmetrics</p>
            <p>Стандарты для калибровки оборудования для исследования поверхности</p>
            <p>Зонды АСМ</p>
            <p>Виброзащита высокоточного оборудования</p>
          </div>
        </div>
        <div className='obroduvane_bot'>
        <div className='obroduvane_img'>
        <img src="./images/obnov1.png" alt=""/>
       
        </div>
          <div className='obroduvane_text'>
          <img src="./images/textobnov.png" alt=""/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Obroduvane