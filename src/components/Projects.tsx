import { useContext } from "react";
import { context } from "../App";
import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";


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
            <img src="data:image/jpeg;base64,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" alt="" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[#0ef] flex flex-col justify-center items-center text-center p-16 translate-y-full hover:translate-y-0 transition-all duration-500">
              <h4 className="text-2xl mb-2">Cloud Based Multi Illness Forecast</h4>
              <p className="text-base mb-3">Link for insights on cloud-based multi-illness forecasting in healthcare exploration.</p>
              <a href="https://github.com/picoders1/Multiple-Disease-Detection-System-Deployment-on-Cloud" className="inline-flex justify-center items-center w-20 h-20 bg-white rounded-full">
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