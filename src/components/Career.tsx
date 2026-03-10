import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Training  <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> front-end Development</h4>
                <h5>codtech iT solution</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             Completed professional training in Frontend Development, gaining practical experience in HTML, CSS, and JavaScript. Learned to build responsive, interactive websites and implement client-side validation and modern UI design principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Back-end Development</h4>
                <h5>Codtech IT solution</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed training in MERN Stack (MongoDB, Express.js, React.js, Node.js) and gained experience building full-stack web applications, REST APIs, and responsive user interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Cognify</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed training in full-stack web development, gaining hands-on experience with HTML, CSS, JavaScript, React.js, Node.js, and database integration to build modern web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>java-FullStack</h4>
                <h5>Q Spider</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
             Java Full Stack Development – QSpiders (Currently Pursuing)
Currently learning Core Java, Advanced Java, Spring Boot, SQL, HTML, CSS, JavaScript, and React.js to build full-stack web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
