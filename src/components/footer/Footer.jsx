import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              © You can’t stream or display movies or series directly without
              permission. Instead, consider using licensed APIs, such as those
              from TMDb (The Movie Database) or OMDb (Open Movie Database),
              which provide information about movies and series (e.g., title,
              summary, cast, etc.) without actual video content.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="box">
            <h3>Streamit App</h3>
            <div className="img flexSB">
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <span>App Store</span>
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              <span>Google Play Store</span>{" "}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
