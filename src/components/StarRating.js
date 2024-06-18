import React from "react";

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-8 h-8 cursor-pointer ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          onClick={() => onRatingChange(index + 1)}
        >
          <path d="M9.049.87a1 1 0 011.902 0l1.29 3.964a1 1 0 00.95.69h4.178a1 1 0 01.592 1.806l-3.39 2.458a1 1 0 00-.364 1.118l1.29 3.964a1 1 0 01-1.54 1.118L10 12.317l-3.39 2.458a1 1 0 01-1.54-1.118l1.29-3.964a1 1 0 00-.364-1.118L2.606 7.33a1 1 0 01.592-1.806h4.178a1 1 0 00.95-.69L9.049.87z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
