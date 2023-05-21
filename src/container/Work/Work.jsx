import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.css';
import { images } from '../../constants';

const abouts = [
  {title:'UI/UX', description:'Find UI/UX jobs',imgUrl: images.work01},
  {title:'Blockchain', description:'Find Blockchain jobs',imgUrl:images.work02},
  {title:'Mobile App', description:'Find Mobile App jobs',imgUrl:images.work03},
  {title:'Data Science', description:'Find Data Science jobs',imgUrl:images.work04},
  {title:'DevOps', description:'Find DevOps jobs',imgUrl:images.work05},
  {title:'Frontend', description:'Find Frontend jobs',imgUrl:images.work06},
  {title:'Backend', description:'Find Backend jobs',imgUrl:images.work07},
  {title:'Analytics', description:'Find Analytics',imgUrl:images.work08},

]

const Work = () => {
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  

 

  const handleWorkFilter = (item) => {
 
  };

  return (
    <>
      <h2 className="head-text">Find <span>Internship</span> opportunities</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'Data Science', 'Frontend' , 'Backend' , 'BlockChain' , 'Business' , 'DevOps' , 'Analytics' , 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
          <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
          
        ))}
        
      </div>
      
    </>
  );
};

export default AppWrap(Work,'internship');