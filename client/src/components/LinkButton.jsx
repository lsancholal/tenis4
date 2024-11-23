import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ to, text, className }) => {
  return (
    <Link
      to={to}
      className={`mt-4 inline-block px-6 py-2 text-white bg-black hover:bg-gray-800 rounded-lg text-center transition-colors ${className}`}
    >
      {text}
    </Link>
  );
};