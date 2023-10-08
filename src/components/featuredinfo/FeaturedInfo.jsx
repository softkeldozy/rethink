import React from 'react';
import './FeaturedInfo.css';
import edit from './icons/edit.svg';
import uptrend from './icons/uptrend.svg';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="socials">
        <p className='socialIntro'>Social media</p>
        <div className="featuredItem">
          <div className="socialBtn">
            <button className='socialBtn'>
              <img src={edit} alt='edit' className='editIcon' />
            </button>
            <button className='socialBtn'>
              <img src={uptrend} alt='edit' className='editIcon' />
            </button>
          </div>
          <div className="writeUp">
            <h4 className="heading">Blog Writing</h4>
            <p className='blogTxt'>Generate the best blog post to fit your audience with just few clicks of a button </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedInfo