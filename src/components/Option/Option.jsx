import './Option.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ imageSrc, imageAlt, title, subtitle, description, height, weight, position, primary_position, percentage, onClick, flipped }) => {
  return (
    <div className={`option ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="option__front">
        <div className="option__image-wrapper">
          <img src={imageSrc} alt={imageAlt} className="option__image" />
          <div className="option__share-icon">
            <i className="fas fa-share-alt"></i>
          </div>
        </div>
        <div className="option__content">
          <label className="option__title">{title}</label>
          <p className="option__subtitle">{subtitle}</p>
          <p className="option__description">{description}</p>
          <p className="option__details">
            Height: {height} inches<br />
            Weight: {weight} lbs<br />
            Position: {position} ({primary_position})
          </p>
        </div>
      </div>
      <div className="option__back">
        <div className="option__back-content">
          <div className="option__fill" style={{ height: `${percentage}%` }}></div>
          <label>{percentage}% Vote</label>
        </div>
      </div>
    </div>
  );
};

Option.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  primary_position: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
};

export default Option;
