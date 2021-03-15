import React from 'react';
import { useGlobalContext } from './context';

const Item = () => {
  const { newList, addItem } = useGlobalContext();

  return (
    <div>
      {newList.map(item => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.author}</p>
              <p>{item.price.toFixed(3)} d</p>
              <button onClick={() => addItem(item)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;