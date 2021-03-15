import React from 'react';
import { useGlobalContext } from './context';
import data from './data';

const Main = () => {
  const { addItem } = useGlobalContext();

  return (
    <div>
      {data.map(item => {
        const { id, name, author, price, image } = item;
        return (
          <div key={id}>
            <div>
              <img src={image} alt={name} />
            </div>
            <div>
              <p>{name}</p>
              <p>{author}</p>
              <p>{price.toFixed(3)} d</p>
              <button onClick={() => addItem(item)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;