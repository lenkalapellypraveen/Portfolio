import { useContext } from "react";
import { context } from "../App";
import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";
import { Genomic_Ancestry_Prediction } from "../assets/index"
import { Weather_Prediction } from "../assets/index"
import { Brain_Tumor } from "../assets/index"

const Projects = () => {
    const { isLight } = useContext(context);


    return (
        <div id="projects" className={`mt-2 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"} mb-8`}>Projects.</h2>
            
            <section class="projects" id="projects">
                <h2 class="heading" data-sr-id="4" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;">Latest <span>Project</span></h2>

                <div class="projects-container">
                    <div class="projects-box" data-sr-id="8" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;">
                        <img src={Genomic_Ancestry_Prediction} alt="">
                        <div class="projects-layer">
                            <h4>Genomic Ancestry Prediction through Advanced Machine Learning Integration</h4>
                            <p>Click the link for more information</p>
                            <a href="https://github.com/lenkalapellypraveen/Genomic-Ancestry-Prediction-through-Advanced-Machine-Learning-Integration"><i class="bx bx-link-external"></i></a>
                        </div>
                    </div>

                    <div class="projects-box" data-sr-id="9" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;">
                    <img src={Weather_Prediction} alt="">
                    <div class="projects-layer">
                        <h4>Real-Time Weather prediction with API Integration</h4>
                        <p>Click the link for more information</p>
                        <a href="https://github.com/lenkalapellypraveen/Real-Time-Weather-prediction-with-API-Integration"><i class="bx bx-link-external"></i></a>
                    </div>
                    </div>

                    <div class="projects-box" data-sr-id="10" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s;">
                    <img src={Brain_Tumor} alt="">
                    <div class="projects-layer">
                        <h4>Automated Brain Tumor Segmentation and Detection Using Deep Neural Networks on FLAIR MRI</h4>
                        <p>Click the link for more information</p>
                        <a href="https://github.com/lenkalapellypraveen/Automated-Brain-Tumor-Segmentation-and-Detection-Using-Deep-Neural-Networks-on-FLAIR-MRI"><i class="bx bx-link-external"></i></a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
      
    )
}

export default Projects;