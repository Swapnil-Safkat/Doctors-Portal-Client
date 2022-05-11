import React from 'react';

const ServiceCard = ({ data }) => {
  const { img, title, body } = data;
  return (
    <div className="card py-4 shadow-xl hover:shadow-2xl w-full flex flex-col justify-center">
      <figure className="pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ServiceCard;