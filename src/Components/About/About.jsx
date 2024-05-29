import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img src={play_icon} alt="" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Be Here Be Vibrant....</h2>
        <p>
          Parul University, established in 2015, is a premier private university
          located in Vadodara, Gujarat, India. The university is renowned for
          its comprehensive range of academic programs, state-of-the-art
          infrastructure, and commitment to holistic education. The sprawling
          campus is equipped with modern classrooms, well-furnished hostels,
          advanced laboratories, and recreational facilities, providing students
          with an enriching environment for both learning and personal growth.
          The serene campus, combined with the vibrant student community, makes
          Parul University a preferred destination for higher education.
        </p>
        <p>
          At Parul University, students have access to a wide array of
          undergraduate, postgraduate, and doctoral programs across diverse
          fields such as Engineering, Management, Law, Medicine, Pharmacy,
          Design, and Fine Arts. The university prides itself on its
          interdisciplinary approach, encouraging collaboration across different
          fields of study. With a dedicated faculty comprising industry experts
          and experienced academicians, Parul University ensures a high standard
          of education and research. The university also emphasizes practical
          learning, with numerous opportunities for internships, industry
          projects, and hands-on training.
        </p>
        <p>
          Parul University is committed to fostering innovation and
          entrepreneurship among its students. Through its various incubation
          centers and startup support programs, the university provides aspiring
          entrepreneurs with the necessary resources and mentorship to bring
          their ideas to life. The strong industry connections and active
          placement cell ensure that students are well-prepared for their
          careers, with numerous placement opportunities in leading companies.
          Additionally, the university's international partnerships and exchange
          programs offer students global exposure, preparing them to succeed in
          an interconnected world.
        </p>
      </div>
    </div>
  );
};

export default About;
