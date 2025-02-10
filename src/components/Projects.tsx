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
        <div id="projects" className={`mt-4 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
        <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"} mb-16`}>Projects.</h2>
        
        <section className="min-h-screen py-28 px-[9%] overflow-x-auto">
            <div className="flex flex-row flex-nowrap items-center justify-start space-x-4">
                {/* First Project*/}
                <div className="relative rounded-2xl shadow-lg overflow-hidden flex-shrink-0" style={{ width: '400px' }}>
                    <img src={Genomic_Ancestry_Prediction} alt="" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[#0ef] flex flex-col justify-center items-center text-center p-16 translate-y-full hover:translate-y-0 transition-transform duration-500 ease-in-out z-10">
                        <h4 className="text-4xl mb-2">Genomic Ancestry Prediction through Advanced Machine Learning Integration</h4>
                        <p className="text-base mb-3">Click the link for more information</p>
                        <a href="https://github.com/lenkalapellypraveen/Genomic-Ancestry-Prediction-through-Advanced-Machine-Learning-Integration" className="inline-flex justify-center items-center w-20 h-20 bg-white rounded-full">
                        <i className='bx bx-link-external text-2xl text-[#112e42]'></i>
                        </a>
                    </div>
                </div>
                {/* Second Project */}
                <div className="relative rounded-2xl shadow-lg overflow-hidden flex-shrink-0" style={{ width: '400px' }}>
                    <img src={Weather_Prediction} alt="" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[#0ef] flex flex-col justify-center items-center text-center p-16 translate-y-full hover:translate-y-0 transition-all duration-500 z-10">
                        <h4 className="text-5xl mb-2">Real-Time Weather prediction with API Integration</h4>
                        <p className="text-base mb-3">Click the link for more information</p>
                        <a href="https://github.com/lenkalapellypraveen/Real-Time-Weather-prediction-with-API-Integration" className="inline-flex justify-center items-center w-20 h-20 bg-white rounded-full">
                            <i className='bx bx-link-external text-2xl text-[#112e42]'></i>
                        </a>
                    </div>
                </div>                
                {/* Third Project */}
                <div className="relative rounded-2xl shadow-lg overflow-hidden flex-shrink-0" style={{ width: '400px' }}>
                    <img src={Brain_Tumor} alt="" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[#0ef] flex flex-col justify-center items-center text-center p-16 translate-y-full hover:translate-y-0 transition-all duration-500 z-10">
                        <h4 className="text-6xl mb-2">Automated Brain Tumor Segmentation and Detection Using Deep Neural Networks on FLAIR MRI</h4>
                        <p className="text-base mb-3">Click the link for more information</p>
                        <a href="https://github.com/lenkalapellypraveen/Automated-Brain-Tumor-Segmentation-and-Detection-Using-Deep-Neural-Networks-on-FLAIR-MRI" className="inline-flex justify-center items-center w-20 h-20 bg-white rounded-full">
                            <i className='bx bx-link-external text-2xl text-[#112e42]'></i>
                        </a>
                    </div>
                </div>
                {/* Additional projects would follow the same structure */}
            </div>
        </section>
      </div>
      
    )
}

export default Projects;