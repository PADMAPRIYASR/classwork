import React, { useState } from 'react';

const COFFEE_ITEMS = [
  { name: 'Espresso', price: 2.5 },
 
  { name: 'Cappuccino', price: 3.5 },
 
];

const TEA_ITEMS = [
  { name: 'Green Tea', price: 2 },
  { name: 'Black Tea', price: 2 },
  
];

const PASTRY_ITEMS = [
  ,
  { name: 'Blueberry Muffin', price: 2.5 },
  { name: 'Chocolate Chip Cookie', price: 1.5 },
 ,
];

function MenuItem({ name, price, onAddToCart }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Rs .{price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

function MenuSection({ title, items, onAddToCart }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          onAddToCart={() => onAddToCart(item)}
        />
      ))}
    </div>
  );
}

function CartItem({ name, price }) {
  return (
    <div>
      <span>{name}</span>
      <span>Rs. {price.toFixed(2)}</span>
    </div>
  );
}

function Cart({ items }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      {items.map(item => (
        <CartItem key={item.name} name={item.name} price={item.price} />
      ))}
      <h4>Total: Rs. {totalPrice.toFixed(2)}</h4>
    </div>
  );
}

function Day3() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div>
      <header>
        <h1>COFFEE WORLD</h1>
        <p>Welcome to our  coffee shop</p>
      </header>
      <nav>
        <ul>
          <li><a href="#coffee">Coffee</a></li>
          <li><a href="#tea">Tea</a></li>
          
        </ul>
      </nav>
      <main>
        <MenuSection title="Coffee" items={COFFEE_ITEMS} onAddToCart={addToCart} />
        <MenuSection title="Tea" items={TEA_ITEMS} onAddToCart={addToCart} />
        
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default Day3;