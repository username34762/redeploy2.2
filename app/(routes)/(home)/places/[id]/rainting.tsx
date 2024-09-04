import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  value: number; // Valor promedio actual de la calificación
  onChange: (value: number) => void; // Función para manejar el cambio de calificación
}

const Rating: React.FC<RatingProps> = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  const handleClick = (index: number) => {
    onChange(index);
  };

  return (
    <div className="flex">
      {Array(5).fill(null).map((_, index) => (
        <FaStar
          key={index}
          className={`cursor-pointer ${index + 1 <= (hoverValue || value) ? 'text-yellow-500' : 'text-gray-300'}`}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;
