import React from 'react';
import './Head.css';
import frame from './svg/frame1.svg';

const Head = () => {
  return (
    <div class="jumbotron">
      <h1 className='lead'>Hey James!</h1>
      <p>Lets create something awesome today ✨💫.</p>
      <button className='btn'>Start Creating</button>
      <div className="container">
        <img src={frame} alt='' className='halfBall' />
        <div className="dropDown">
          <select id="cities" name="cities">
            <option value="New York">Volvo</option>
            <option value="Chicago">Saab</option>
            <option value="Denver">Mercedes</option>
            <option value="Washinton">Audi</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Head