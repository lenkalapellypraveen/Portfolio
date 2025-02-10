import { useContext } from "react";
import { context } from "../App";
import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";
import { Genomic_Ancestry_Prediction } from "../assets/index"

const Projects = () => {
    const { isLight } = useContext(context);


    return (
        <div id="projects" className={`mt-4 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"} mb-16`}>Projects.</h2>
            <div className='flex flex-col justify-between items-start gap-5 w-full mb-10 md:p-4'>
                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col md:flex-row w-full md:p-4 border-2 ${isLight ? "border-black" : "border-white"} rounded-xl md:gap-2`}>
                        <div className="md:w-2/3 flex flex-col justify-between p-4 gap-5">
                            <header className="flex justify-between items-center">
                                <h3 className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } text-[1.05rem]   md:text-xl font-bold`}>{project.title}</h3>
                                <a href={project.source} target="_blank" >
                                    <img src={github} alt="githubLink" className={`w-6 h-6 md:w-9 md:h-9 hover:scale-110 ${isLight ? "" : "invert"}`} />
                                </a>
                            </header>
                            <p className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark" } px-2 md:p-2 text-sm md:text-base max-w-1/2 leading-[30px]`}>{project.description}</p>
                            <div className="flex items-center justify-center md:justify-end gap-3">
                                {project.stack.map((tech, techIndex) => (
                                    <img key={techIndex} src={tech} alt={"tech" + {techIndex}} className="w-7 h-7 md:w-10 md:h-10"/>
                                ))}
                            </div>
                        </div>
                        <img src={project.media} alt={project.title + ' Media'} className={`md:w-1/3 rounded-xl border-2 ${isLight ? "border-black" : "border-white"} `} />
                    </div>
                ))}
            </div>
            
            <section className="min-h-screen py-28 px-[9%]">
      <div className="flex flex-col items-center justify-center">
        {/* Projects Container */}
        <div className="mb-4">
          {/* Individual Project */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src= {Genomic_Ancestry_Prediction} alt="" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[#0ef] flex flex-col justify-center items-center text-center p-16 translate-y-full hover:translate-y-0 transition-all duration-500">
              <h4 className="text-2xl mb-2">Genomic Ancestry Prediction through Advanced Machine Learning Integration</h4>
              <p className="text-base mb-3">Click the link for more information</p>
              <a href="https://github.com/lenkalapellypraveen/Genomic-Ancestry-Prediction-through-Advanced-Machine-Learning-Integration" className="inline-flex justify-center items-center w-20 h-20 bg-white rounded-full">
                <i className='bx bx-link-external text-2xl text-[#112e42]'></i>
              </a>
            </div>
          </div>
          {/* Additional projects would follow the same pattern */}
        </div>
      </div>
    </section>

          
        </div>
    )
}

export default Projects;