import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        {/* <img
          src={"https://drive.google.com/file/d/1VuH9gajZEMIZa-qmh1D-XjDDXg6eMzlQ/view?usp=drive_link"}
          alt="Founder"
        /> */}
        <h3> Created and Maintained by</h3>
        <h2>Simran</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/Simran93504" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/simranarora0605/" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;