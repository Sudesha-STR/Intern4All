import React from 'react';
import './Testimonial.css';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor diam nec mi lobortis, id rutrum libero posuere. Nulla dapibus rutrum justo vitae rutrum. Aliquam erat volutpat.',
    role: 'CEO, Soogle Company',
    image: images.test04,
  },
  {
    id: 2,
    name: 'Jane Smith',
    testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Nullam pulvinar felis vitae arcu tincidunt sagittis.',
    role: 'CTO, Kuta Inc.',
    image: images.test01,
  },
  {
    id: 3,
    name: 'Geetha',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor diam nec mi lobortis, id rutrum libero posuere. Nulla dapibus rutrum justo vitae rutrum. Aliquam erat volutpat.',
    role: 'CEO, Tooter Company',
    image: images.test02,
  },
  {
    id: 4,
    name: 'Steve Smith',
    testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Nullam pulvinar felis vitae arcu tincidunt sagittis.',
    role: 'CTO, Fistagram Inc.',
    image: images.test03,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-page">
      <h2 className="head-text"><span>Testimonials</span></h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Testimonial,'testimonial');
