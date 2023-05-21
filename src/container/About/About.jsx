import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import {images} from '../../constants';
import './About.css';


const abouts = [
  {title:'Success', description:'We provide a gateway to excell in life',imgUrl: images.about01},
  {title:'Freelancing', description:'We help you to become a freelancer.',imgUrl:images.about02},
  {title:'Search', description:'We help in finding opportunities',imgUrl:images.about03},
  {title:'Community', description:'We build a healthy community to shine.',imgUrl:images.about04},
]
const About = () => {
  return (
    <>
      <h2 className="head-text">We believe <span>achieveing together</span><br />is the <span>path towards growing</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About,'about')