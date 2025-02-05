import './style.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { context } from "../App";
import { comp, linkedin, github, gmail } from "../assets";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { isLight } = useContext(context);

  return (
    <div
      className={`z-10 ${
        isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark"
      } bg-cover bg-no-repeat bg-center`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent from-60% ${
          isLight ? "to-white" : "to-black"
        } z-20`}
      ></div>
      <section
        className={`relative z-30 shrink-0 w-full h-screen mx-auto ${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex items-start justify-between`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mt-3 gap-1">
          <div className="flex flex-col gap-1 md:gap-3">
            <p
              className={`${styles.heroSubText} ${
                isLight ? "text-black-200" : "text-white-100"
              } mt-2`} 
            >Hi I'm</p>
              <h1>
                <span className="name-gradient first-name">Praveen</span> 
                <span className="name-gradient last-name"> Lenkalapelly</span>
              </h1>
            <p
              className={`${styles.heroSubText} ${
                isLight ? "text-black-200" : "text-white-100"
              } mt-2`}
            >
              <span className="text-secondary-light">
                <Typewriter
                  words={[
                    " Data Scientist.",
                    " Data Engineer.",
                    " Machine Learning Engineer.",
                    " Cloud Engineer.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <div class="text-secondary-text-light text-[17px] max-w-5xl leading-[30px] md:ml-3 text-justify">
	              <p>&nbsp;Data Professional leveraging statistical analysis, machine learning, and advanced programming skills to collect, clean, and analyze 
                  large datasets, extracting meaningful insights, and developing predictive models to guide strategic business decisions.
	              </p>
            </div>
            <div className="flex gap-5 md:gap-7 justify-start items-center">
              <Link
                to="/resume"
                className={`${
                  isLight
                    ? "bg-black-200 text-white-100"
                    : "bg-white-100 text-black-200"
                } hover:scale-105 text-xs md:text-lg font-semibold p-3 rounded-xl`}
              >
                My Resume
              </Link>
              <a href="https://www.linkedin.com/in/praveen-lenkalapelly/" target="__blank">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-7 md:w-10 hover:scale-105"
                />
              </a>
              <a href="https://github.com/lenkalapellypraveen" target="__blank">
                <img
                  src={github}
                  alt="github"
                  className={`${
                    isLight ? "" : "invert"
                  } w-7 md:w-10 hover:scale-105`}
                />
              </a>
              <a href="mailto:praveen.lenkalapelly9@gmail.com" target="__blank">
                <img
                  src={gmail}
                  alt="gmail"
                  className="w-7 md:w-10 hover:scale-105"
                />
              </a>
            </div>
          </div>
          <div class="profile-circle">
            <img
              src={comp}
              alt="Working Man"
              className="pointer-events-none z-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
