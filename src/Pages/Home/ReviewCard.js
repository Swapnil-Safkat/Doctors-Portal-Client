import React from 'react';

const ReviewCard = ({ Review }) => {
  const { name, img, location, review } = Review;
  return (
    <div className='w-full p-4'>
      <div className="card shadow-md hover:shadow-2xl">
        <div className="card-body">
          <p>{review}</p>
          <div className="card-actions mt-9 flex justify-start items-center">
            <div className="avatar mr-4">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt='' />
              </div>
            </div>
              <div>
                <h1 className='text-xl font-semibold'>{ name }</h1>
                <h1 className=''>{ location}</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;