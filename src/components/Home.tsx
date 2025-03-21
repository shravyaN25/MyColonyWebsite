import React from "react";
import "../styles/Home.css"; // Import external CSS
import ContactForm from "../components/ContactForm"; // Import ContactForm component

const Home: React.FC = () => {
  
  return (
    <>
   
   <div className="bubbles-container">
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
</div>
      {/* Header Section */}
      <header>
        <div className="container">
         <center> <div className="logo">Annapurna Badavane</div>
          <div className="tagline">Where Community Thrives in Harmony with Nature</div></center>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        
        <div className="container">
          <h2 className="section-title">Community Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡</div>
              <h3 className="feature-title">24/7 Security</h3>
              <p>Round-the-clock security personnel and secure access gates ensure the safety of all residents.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌳</div>
              <h3 className="feature-title">Lush Greenery</h3>
              <p>Beautiful green spaces for a refreshing environment.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🅿</div>
              <h3 className="feature-title">Ample Parking</h3>
              <p>Designated parking spaces available.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h3 className="feature-title">Community Events</h3>
              <p>Regular cultural celebrations, festivals, and community gatherings to foster neighborly bonds.</p>
            </div>
          </div>
        </div>
      </section>
    
      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="images/ann.jpg" alt="Annapurna Badavane Community" />
            </div>
            <div className="about-text">
              <h2>About Annapurna Badavane</h2>
              <p>Established in the year 2003, Annapurna Badavane,located in the heart of Hosapete is more than just a residential colony – it's a thriving community where families grow together.</p>
              <p>Managed by the dedicated Annapurna Badavane Association, our community prioritizes the well-being and comfort of all residents while maintaining the highest standards of infrastructure and amenities.</p>
              <p>Located in a prime area with excellent connectivity, Annapurna Badavane offers the perfect balance of tranquility and convenience. Our community is home to over 90 families, and we take pride in our two revered temples - the Ganesha Temple and the Annapurna Devi Temple - which serve as a spiritual hub for our residents.</p>
            </div>
          </div>
        </div>
      </section>

<section class="amenities">
  <div class="container">
    <h2 class="section-title">Amenities and Nearby Attractions</h2>
    <div class="amenities-grid">
      <div class="amenity-card">
        <div class="amenity-icon">🏫</div>
        <h3 class="amenity-title">School</h3>
        <p>Multiple schools available within 5km radius, offering various curricula, including:</p>
        <ul>
          <li>State Syllabus</li>
          <li>CBSE Syllabus</li>
          <li>And many more!</li>
        </ul>
      </div>
      <div class="amenity-card">
        <div class="amenity-icon">🏋️‍♀️</div>
        <h3 class="amenity-title">Indoor Sports Complex</h3>
        <p>Right in front of the colony gate, just 200m away! Enjoy a range of facilities, including:</p>
        <ul>
          <li>Swimming Pool</li>
          <li>Badminton Court</li>
          <li>Gym</li>
          <li>Basketball Court</li>
          <li>And many more!</li>
        </ul>
      </div>
      <div class="amenity-card">
        <div class="amenity-icon">🛍️</div>
        <h3 class="amenity-title">Supermarkets</h3>
        <p>Get your daily essentials from nearby supermarkets, just a short walk away.</p>
      </div>
      <div class="amenity-card">
        <div class="amenity-icon">🚂</div>
        <h3 class="amenity-title">Railway Station</h3>
        <p>Just 2km away, providing easy access to public transportation.</p>
      </div>
      <div class="amenity-card">
        <div class="amenity-icon">🚌</div>
        <h3 class="amenity-title">Bus Stand</h3>
        <p>Only 1.5km away, offering convenient travel options.</p>
      </div>
      <div class="amenity-card">
        <div class="amenity-icon">🏥</div>
        <h3 class="amenity-title">Hospitals</h3>
        <p>Reputed hospitals nearby, providing quality medical care within easy reach.</p>
      </div>
    </div>
    <p class="description">Annapurna Badavane offers a holistic living experience with all necessary facilities at your doorstep. Our society is surrounded by everything you need, ensuring a comfortable and convenient lifestyle.</p>
  </div>
</section>
```
      {/* Testimonials Section */}
    <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Residents Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Moving to Annapurna Badavane was the best decision for our family. The security and community atmosphere are unmatched. Our children love the open spaces and we enjoy the regular community events."</p>
              <p className="testimonial-author">- Padma and GY Niranjan, Resident since 2012</p>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">"The well-maintained greenery and clean environment make this place special. The association is very responsive and always working to improve our living experience."</p>
              <p className="testimonial-author">- Vidya and Ramesh K, Resident since 2016</p>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">"After retiring, we wanted a peaceful yet active community. Annapurna Badavane provides both with its serene environment and vibrant community activities."</p>
              <p className="testimonial-author">- Lakshmi and Ajith, Residents since 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Community Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="images/img1.jpg" alt="Green spaces in Annapurna Badavane" />
            </div>
            <div className="gallery-item">
              <img src="images/img2.jpg" alt="Community event celebration" />
            </div>
            <div className="gallery-item">
              <img src="images/img3.jpg" alt="Security entrance gate" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>📍 Annapurna Badavane, near VNC ground, Chittawadagi, Vijayanagara dist, Karnataka, Hospet - 583201</p>
              <p>⏰ Office Hours: Monday-Saturday, 9:00 AM - 6:00 PM</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="copyright">
              <center><p>&copy; 2025 Annapurna Badavane Association. All Rights Reserved.</p></center>
<center>Crafted with ❤️ by Shravya N</center>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;