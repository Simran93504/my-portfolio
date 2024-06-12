import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiOutlineBgColors, AiFillCode} from "react-icons/ai";
import { IoLogoVue } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        {/* <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>5+</h3>
          <p>Years Experience</p>
        </motion.div> */}
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>Backend Development</span>
          <h2><FaLaravel /> <SiPhp /> <SiMysql />
 </h2>
          
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <AiOutlineBgColors />
          <span>Frontend Development</span>
          <h2><IoLogoVue /> <RiReactjsLine /></h2>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillCode/>
          <span>Blockchain Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
