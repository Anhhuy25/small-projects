import React from 'react';
import { useGlobalContext } from './context';
import './style.css';
import './grid.css';

const From32to64 = () => {
  const { from128to256 } = useGlobalContext();

  return (
    <div>
      <h1>Tu 128 - 256 GB</h1>
      <div className="grid wide">
        <div className="row">
          {from128to256.map(phone => {
            return (
              <div key={phone.id} className="col l-3 container">
                <img src={phone.img} alt={phone.name} className="phone-img" />
                <h3 className="phone-name">{phone.name}</h3>
                <div>
                  <strong className="phone-price">{phone.price.toFixed(3)}.000d</strong>
                </div>
                <div className="phone-info">
                  <p>Man hinh chinh: {phone.info.screen}</p>
                  <p>Chip: {phone.info.chip}</p>
                  <p>RAM: {phone.info.RAM} GB, Bo nho trong: {phone.info.storage} GB</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default From32to64;