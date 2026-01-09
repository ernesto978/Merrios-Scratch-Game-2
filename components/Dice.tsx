
import React from 'react';
import { DICE_RESOURCES } from '../constants';

interface DiceProps {
  value: number;
  className?: string;
}

export const Dice: React.FC<DiceProps> = ({ value, className = '' }) => {
  return (
    <div className={`w-16 h-16 md:w-20 md:h-20 shadow-lg rounded-xl overflow-hidden bg-white ${className}`}>
      {DICE_RESOURCES[value] || null}
    </div>
  );
};
