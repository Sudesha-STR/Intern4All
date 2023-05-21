

import React, { useState } from 'react';
import './Skills.css';
import { AppWrap } from '../../wrapper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3,faJs,faReact,faAngular,faVuejs,faRust,faNode } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const languagesData = [
  { name: 'JavaScript', icon: ['fab', 'js'] },
  { name: 'Python', icon: ['fab', 'python'] },
  { name: 'Java', icon: ['fab', 'java'] },
  { name: 'C++', icon: ['fab', 'cuttlefish'] },
  { name: 'Ruby', icon: ['fas', 'gem'] },
  { name: 'Go', icon: ['fab', 'go'] },
  { name: 'Swift', icon: ['fab', 'swift'] },
  { name: 'Rust', icon: faRust },
  { name: 'TypeScript', icon: ['fab', 'react'] },
  { name: 'PHP', icon: ['fab', 'php'] },
  {name: 'Flutter',icon: ['fab','flutter'] },
  {name: 'HTML',icon: faHtml5},
  { name: 'CSS3', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Angular', icon: faAngular },
    { name: 'Vuejs', icon: faVuejs },
    { name: 'Node.js', icon: faNode },
];

const Skills = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageClick = (languageName) => {
    setSelectedLanguage(languageName);
  };

  return (
    <div className="App">
       <h2 className="head-text">Select your <span>Freelancing</span> programming language</h2>
      <div className="LanguageList">
        {languagesData.map((language, index) => (
          <div
            key={index}
            className={`LanguageItem ${selectedLanguage === language.name ? 'active' : ''}`}
            onClick={() => handleLanguageClick(language.name)}
          >
            <FontAwesomeIcon icon={language.icon} className="LanguageIcon" />
            <span>{language.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Skills,'freelancing');
