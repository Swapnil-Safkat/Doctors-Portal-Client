import React from 'react';

const InfoCards = ({ data }) => {
  const { img, title, body, bg } = data;
  const cardClass = `card lg:card-side bg-base-100 shadow-xl pt-6 lg:pt-0 lg:px-6 text-white ${bg}`;
  return (
    <div className={cardClass}>
      <figure><img src={img} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default InfoCards;