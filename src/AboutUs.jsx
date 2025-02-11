// function AboutUs(){
//     return(
//         <>
//         <h1>This is About Us Page</h1>
//         </>
//     )
// }
// export default AboutUs;

import React from 'react';

function AboutUs() {
  return (
    <>
      <header>
        <h1>About Us</h1>
        <p>Welcome to Our Store! We're dedicated to providing you with exceptional products and outstanding service.</p>
      </header>

      <main>
        <section>
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Our Store began as a small family-run business with the simple goal of providing high-quality
            products at affordable prices. We started with a small team and a passion for customer satisfaction. Over the years, 
            we've grown into a trusted name in retail, offering a wide range of carefully curated items.
          </p>
          <p>
            We are committed to sourcing products that make a difference, from the latest tech gadgets to eco-friendly home 
            essentials. Our focus remains on quality, affordability, and a seamless shopping experience.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make shopping enjoyable and convenient for everyone. At Our Store, we are driven by the belief that
            every customer deserves a personalized experience, from browsing our website to receiving their order at home. Our 
            mission includes:
          </p>
          <ul>
            <li>Providing a wide selection of top-quality products.</li>
            <li>Delivering a hassle-free shopping experience.</li>
            <li>Offering fast and reliable shipping options.</li>
            <li>Maintaining a customer-first approach with every interaction.</li>
          </ul>
        </section>

        <section>
          <h2>Our Core Values</h2>
          <p>Our values shape the way we do business and interact with our customers:</p>
          <ul>
            <li><strong>Customer Satisfaction:</strong> We always strive to exceed your expectations.</li>
            <li><strong>Integrity:</strong> Honesty and transparency guide all our actions.</li>
            <li><strong>Innovation:</strong> We're constantly looking for new ways to improve and evolve.</li>
            <li><strong>Quality:</strong> We believe that quality is the key to long-lasting relationships with our customers.</li>
            <li><strong>Community:</strong> We value and support the communities we serve.</li>
          </ul>
        </section>

        <section>
          <h2>Our Team</h2>
          <p>Our dedicated team works tirelessly to provide you with the best products and service:</p>
          <ul>
            <li><strong>John Doe:</strong> Founder & CEO – John founded Our Store with a vision to change the way people shop.</li>
            <li><strong>Jane Smith:</strong> Head of Customer Service – Jane and her team are here to help with any inquiries.</li>
            <li><strong>Mark Lee:</strong> Product Manager – Mark oversees product sourcing, ensuring top-quality items in our store.</li>
            <li><strong>Emily Davis:</strong> Marketing Director – Emily runs all our advertising and outreach programs.</li>
          </ul>
        </section>

        <section>
          <h2>Customer Testimonials</h2>
          <p>Don't just take our word for it! Here's what our customers have to say:</p>
          <blockquote>
            <p>"I've been shopping at Our Store for years, and every experience has been amazing! The customer service is top-notch, 
            and the products are always exactly what I expect." – Sarah L.</p>
          </blockquote>
          <blockquote>
            <p>"This store has a great selection of products at affordable prices. I've recommended it to all my friends!" – James R.</p>
          </blockquote>
          <blockquote>
            <p>"I was impressed with how quickly my order arrived, and everything was packaged perfectly. Highly recommend!" – Laura P.</p>
          </blockquote>
        </section>

        <section>
          <h2>Sustainability Efforts</h2>
          <p>At Our Store, we care about the environment, and we're always looking for ways to reduce our impact:</p>
          <ul>
            <li><strong>Eco-friendly packaging:</strong> We’ve switched to 100% recyclable materials for all of our packaging.</li>
            <li><strong>Sustainable sourcing:</strong> We work closely with manufacturers who share our commitment to sustainability.</li>
            <li><strong>Reducing carbon footprint:</strong> We strive to reduce energy consumption in our offices and warehouses.</li>
            <li><strong>Supporting green initiatives:</strong> A portion of every sale goes toward environmental causes.</li>
          </ul>
        </section>

        <section>
          <h2>FAQs</h2>
          <p>Have some questions? We've got answers! Here are some of the most frequently asked questions:</p>
          <dl>
            <dt>How can I track my order?</dt>
            <dd>You can track your order using the tracking number sent to your email once your order has shipped.</dd>

            <dt>What is your return policy?</dt>
            <dd>We offer a 30-day return policy for most items. Please visit our Returns page for more details.</dd>

            <dt>Do you offer gift cards?</dt>
            <dd>Yes, we offer digital gift cards that can be redeemed at checkout. Visit our Gift Cards page for more information.</dd>

            <dt>How can I contact customer service?</dt>
            <dd>You can contact our customer service team via email at support@ourstore.com or through our contact form.</dd>
          </dl>
        </section>

        <section>
          <h2>Join Our Community</h2>
          <p>
            We're more than just a store — we're a community! Join us on social media and subscribe to our newsletter to stay updated
            on new arrivals, promotions, and exclusive offers.
          </p>
          <ul>
            <li><strong>Follow us on Instagram:</strong> @OurStore</li>
            <li><strong>Like us on Facebook:</strong> /OurStore</li>
            <li><strong>Subscribe to our newsletter:</strong> Stay updated on all things Our Store.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 Our Store. All rights reserved. | Follow us on social media for the latest updates.</p>
      </footer>
    </>
  );
}

export default AboutUs;
