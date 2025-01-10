import React, { useState } from "react";

const StarRating = () => {
  const [value, setValue] = useState(0);

  const handleClick = (star: number) => {
    setValue(star);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Stars</label>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="stars"
              value={star.toString()}
              onChange={() => handleClick(star)}
              className="hidden" // Hide the default radio button
              required
            />
            <span
              className={`text-5xl ${
                value >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleClick(star)}
            >
              ★
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
