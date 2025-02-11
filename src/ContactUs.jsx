// function ContactUs(){
//     return(
//         <>
//         <h1>This is Contact Us page</h1>
//         </>
//     )
// }
// export default ContactUs;

import React from 'react';

function ContactUs() {
  return (
    <>
      <header>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether you have a question, need assistance, or just want to share feedback, feel free to get in touch.</p>
      </header>

      <main>
        <section>
          <h2>Get in Touch</h2>
          <p>If you need assistance or have any questions, don’t hesitate to reach out. We’re here to help!</p>

          <form action="/submit-contact-form" method="POST">
            <div>
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your full name" />
            </div>

            <div>
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="Your email address" />
            </div>

            <div>
              <label for="message">Your Message</label>
              <textarea id="message" name="message" required placeholder="Your message or question" rows="5"></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section>
          <h2>Customer Support</h2>
          <p>If you need immediate assistance, feel free to reach out to our customer support team:</p>
          <ul>
            <li><strong>Email:</strong> support@ourstore.com</li>
            <li><strong>Phone:</strong> +1 (800) 123-4567</li>
            <li><strong>Operating Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (Excluding Holidays)</li>
          </ul>
        </section>

        <section>
          <h2>Live Chat</h2>
          <p>For real-time assistance, click the live chat button below. Our team is ready to help you instantly!</p>
          <button onClick={() => alert('Starting live chat...')}>
            Start Live Chat
          </button>
        </section>

        <section>
          <h2>Business Inquiries</h2>
          <p>If you're looking to partner with us or have a business-related inquiry, please contact our business team directly:</p>
          <ul>
            <li><strong>Email:</strong> business@ourstore.com</li>
            <li><strong>Phone:</strong> +1 (800) 765-4321</li>
          </ul>
        </section>

        <section>
          <h2>Our Location</h2>
          <p>If you're ever in the area, stop by our store to shop in person! We're located at:</p>
          <address>
            <strong>Our Store</strong><br />
            1234 Shopping Blvd.<br />
            City, State, 12345<br />
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </address>
          
          <div id="map">
            {/* You can embed a Google Map directly here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.839242226046!2d144.96305831569234!3d-37.81421777975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5d2f1f9b8d%3A0xa89067877e4a925f!2sOur%20Store!5e0!3m2!1sen!2sus!4v1673565271688!5m2!1sen!2sus"
              width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
          </div>
        </section>

        <section>
          <h2>Follow Us</h2>
          <p>Stay connected with us on social media for updates, promotions, and more:</p>
          <ul>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/ourstore" target="_blank" rel="noopener noreferrer">@OurStore</a></li>
            <li><strong>Facebook:</strong> <a href="https://facebook.com/ourstore" target="_blank" rel="noopener noreferrer">/OurStore</a></li>
            <li><strong>Twitter:</strong> <a href="https://twitter.com/ourstore" target="_blank" rel="noopener noreferrer">@OurStore</a></li>
            <li><strong>YouTube:</strong> <a href="https://youtube.com/ourstore" target="_blank" rel="noopener noreferrer">OurStore Channel</a></li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? Check out some of the most common inquiries from our customers:</p>
          <dl>
            <dt>What payment methods do you accept?</dt>
            <dd>We accept major credit cards, PayPal, and Apple Pay.</dd>

            <dt>Can I cancel my order after placing it?</dt>
            <dd>Orders can be canceled within 1 hour of placing the order. Please contact customer service immediately if you wish to cancel.</dd>

            <dt>Do you ship internationally?</dt>
            <dd>Yes, we offer international shipping to select countries. Shipping fees and delivery times vary depending on location.</dd>

            <dt>How do I return an item?</dt>
            <dd>We offer a 30-day return policy for most items. Please visit our Returns page for more details.</dd>

            <dt>How can I track my order?</dt>
            <dd>After your order is shipped, you will receive a tracking number via email that you can use to track your package.</dd>
          </dl>
        </section>
      </main>

      <footer>
        <p>© 2025 Our Store. All rights reserved. | Follow us on social media for the latest updates.</p>
      </footer>
    </>
  );
}

export default ContactUs;
