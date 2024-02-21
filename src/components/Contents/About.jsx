import React from "react";



function About (){
    return (
        <>
        <hr />
        <h2>About Us</h2>
      <div className="team">
        <div className="team-member">
          <img src="/profile-picture-avatar.jpg" alt="Team Member 1" />
          <div className="social-links">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        {/* Repeat the above structure for other team members */}
        <div className="team-member">
          <img src="/profile-picture-avatar.jpg" alt="Team Member 2" />
          <div className="social-links">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        {/* Repeat the above structure for other team members */}
      </div>
        </>
    )
}

export default About;