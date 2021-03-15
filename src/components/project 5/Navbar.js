import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import './style.css';

const Navbar = () => {
  const {
    filter2to4, filter4to7,
    overTo20, setStatus,
    isCheck, isCheck2,
    checkResult,
    check3264, check128256
  } = useGlobalContext();

  return (
    <div className="navbar">
      <Link to="/">
        Back To Home
      </Link>
      <Link to="/tu-2-4-trieu" onClick={filter2to4}>
        <p>Tu 2 - 4 trieu</p>
      </Link>
      <Link to="/tu-4-7-trieu" onClick={filter4to7}>
        <p>Tu 4 - 7 trieu</p>
      </Link>
      <Link to="/tren-20-trieu" onClick={overTo20}>
        <p>Tren 20 trieu</p>
      </Link>
      <div>
        <label htmlFor="sapxep">Sap xep</label>
        <select name="sapxep" onChange={(e) => setStatus(e.target.value)} className="select">
          <option value="">-----</option>
          <option value="highlow">Gia cao den thap</option>
          <option value="lowhigh">Gia thap den cao</option>
        </select>
      </div>
      <div>
        <label htmlFor="boloc">Bo loc</label>
        <div className="checbox">
          <input type="checkbox" name="boloc" onClick={check3264} />32 - 64 GB
          <input type="checkbox" name="boloc" onClick={check128256} />128 - 256 GB

          {isCheck || isCheck2 ? <Link to={`${checkResult()}`}><button>Xem ket qua</button></Link> : ''}
        </div>
      </div>
    </div>
  );
};

export default Navbar;