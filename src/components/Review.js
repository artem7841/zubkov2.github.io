import React from 'react';
import './Review.css'; // Импортируем стили

const Reviews = ({ image, text }) => {
  return (
    <div className="review-container">
      <img src={image} alt="Отзыв" className="review-image" />
      <div className="review-text">
        {text}
      </div>
    </div>
  );
};

export default Reviews;