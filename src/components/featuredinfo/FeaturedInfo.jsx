import React from 'react';
import './FeaturedInfo.css';
import edit from './icons/edit.svg';
import uptrend from './icons/uptrend.svg';
import Bullist from './icons/bulletList.svg';
import Outline from './icons/edit-outline.svg';

const FeaturedInfo = () => {
  return (
    <div className="featured">

      <div className="firstRow">

        <h3>Social Media</h3>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={edit} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={Bullist} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={Outline} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={edit} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
      </div>
      <div className="secondRow">

        <h3>Social Media</h3>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={edit} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={Bullist} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={Outline} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
        <div className="blogTxtContainer">
          <div className="socialBtnContainer">
            <button className='editIconBtn' >
              <img src={edit} alt='edit' className='socialIcon' />
            </button>
            <button >
              <img src={uptrend} alt='up' className='socialIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h2>Blog Writing</h2>
            <p>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedInfo