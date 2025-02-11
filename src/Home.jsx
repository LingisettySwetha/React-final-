


import React from 'react';
import VegItems from './VegItems';

function Home() {
  return (
    <>
      <header>
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for all your needs. Discover quality products, unbeatable prices, and exceptional customer service.</p>
      </header>

      <section>
        <h2>Featured Products</h2>
        <div className="product-gallery">
          <div className="product">
            <img src="veg.jpg" alt="Veg Items" />
            <h3>Veg Items</h3>
            <p>Brief description of the product, highlighting its features and benefits.</p>
            <button onclick={VegItems}>Shop Now</button><br/><br/>
          </div>

          <div className="product">
            <img src="nonveg.jpg" alt="Featured Product 2" />
            <h3>Non-Veg Items</h3>
            <p>Brief description of the product, highlighting its features and benefits.</p>
            <button>Shop Now</button><br/><br/>
          </div>

          <div className="product">
            <img src="milk.jpg" alt="Featured Product 3" />
            <h3>Milk Products</h3>
            <p>Brief description of the product, highlighting its features and benefits.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>

      <section>
        <h2>Special Offers</h2>
        <div className="offers">
          <div className="offer">
            <h3>50% Off Sale!</h3>
            <p>Get 50% off on selected items. Hurry, while supplies last!</p>
            <button>Shop Now</button>
          </div>

          <div className="offer">
            <h3>Buy One, Get One Free</h3>
            <p>Buy one product and get another one for free. Don't miss this amazing deal!</p>
            <button>Shop Now</button>
          </div>

          <div className="offer">
            <h3>Free Shipping on Orders Over $50</h3>
            <p>Enjoy free shipping on all orders over $50. No code needed.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>

      <section>
        <h2>About Us</h2>
        <p>
          We are a family-owned store that offers high-quality products at affordable prices. From the latest tech gadgets to everyday essentials, we pride ourselves on our curated selection and top-notch customer service. Join the thousands of happy customers who shop with us every day!
        </p>
       <center><button>Learn More About Us</button></center> 
      </section>

      <section>
        <h2>Customer Reviews</h2>
        <div className="reviews">
          <div className="review">
            <p>"This is the best store I've ever shopped at! Great products and amazing customer service." – Sarah L.</p>
          </div>

          <div className="review">
            <p>"Fast shipping and top-notch products. Will definitely shop here again!" – James R.</p>
          </div>

          <div className="review">
            <p>"I always find what I need at Our Store. Excellent prices and great deals." – Emily D.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to receive the latest deals, promotions, and product releases directly to your inbox!</p>
        <form action="/submit-newsletter" method="POST">
          {/* <input type="email" name="email" required placeholder="Enter your email" />
          <button type="submit">Sign Up</button> */}
        </form>
      </section>

      <footer>
        <p>© 2025 Our Store. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com/ourstore" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/ourstore" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/ourstore" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </>
  );
}

export default Home;

