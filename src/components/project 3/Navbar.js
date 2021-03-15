import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Back to Home</Link>
      ---
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Navbar;