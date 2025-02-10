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
            {/* code for Project img */}
            <div class="projects-box" data-sr-id="9" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;">
              <img src="images/ipp2.jpg" alt=""/>
              <div class="projects-layer">
                  <h4>Diabetic Retinopathy Detection System</h4>
                  <p>Learn more about diabetic retinopathy detection in healthcare by clicking the link.</p>
                  <a href="https://github.com/picoders1/AI-Driven-DR-Detection-System"><i class="bx bx-link-external"></i></a>
              </div>
            </div>
            {/* Project */}
        </div>
    )
}

export default Projects;