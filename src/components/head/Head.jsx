import React from 'react';
import './Head.css';
import frame from './svg/frame1.svg';

const Head = () => {
  return (
    <div class="jumbotron">
      <h1>Hey James!</h1>
      <p>Lets create something awesome today ✨💫.</p>
      <button className='btn'>Start Creating</button>
      <div className="container">
        <img src={frame} alt='' className='halfBall' />
        <div className="dropDown">
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Head