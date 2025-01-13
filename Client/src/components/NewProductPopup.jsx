import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './NewProductPopup.css';

const socket = io('http://localhost:5000');

function NewProductPopup() {
  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    socket.on('newProduct', (productName) => {
      setNewProduct(productName);
      setTimeout(() => {
        setNewProduct(null);
      }, 5000);
    });

    return () => {
      socket.off('newProduct');
    };
  }, []);

  if (!newProduct) return null;

  return (
    <div className="new-product-popup">
      <h2>New Product Added!</h2>
      <p>{newProduct}</p>
    </div>
  );
}

export default NewProductPopup;