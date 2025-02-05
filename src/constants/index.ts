import { ML_Engineer, Data_Scientist, docker, Data_Engineer, Cloud_Engineer, kafka, PowerBi } from '../assets';
import { Ssms,python, sql, git, javascript, mongodb, nodejs, reactjs, tailwind, typescript } from '../assets';
import { java, azure, gcp, tableau, kubernetes, excel, jenkins, scala, plsql} from '../assets';
import { github, Weather_Prediction, Microsoft_Fabric, Genomic_Ancestry_Prediction, Polyp, MS_DS_Associate, Neo4j, Databricks, MS_DP} from '../assets/index';

export const resumeLink = "https://drive.google.com/drive/folders/1FOr_4waHpiQL3e0qgHumIobHQEYiLxJ0";


export const aboutMe = "I leverage advanced analytics and programming skills to transform large datasets into actionable insights, utilizing statistical methods and machine learning algorithms to drive strategic decisions and drive innovation. My expertise bridges the gap between raw data and significant business outcomes."

export const skills = [
    {title: "Data Scientist", icon: Data_Scientist}, 
    {title: "Data Engineer", icon: Data_Engineer}, 
    {title: "Machine Learning Engineer", icon: ML_Engineer}, 
    {title: "Cloud Engineer", icon: Cloud_Engineer}
    // {title: "AWS Solutions Architect", icon: aws}
];

export const frameworks = [
    {title: 'Azure', icon: azure, invert: false }, 
    {title: 'GCP', icon: gcp, invert: false }, 
    {title: 'excel', icon: excel, invert: false }, 
    {title: 'PowerBi', icon: PowerBi, invert: false }, 
    {title: 'Kubernetes', icon: kubernetes, invert: false },
    {title: 'jenkins', icon: jenkins, invert: true }, 
    {title: 'Git', icon: git, invert: false },
    {title: 'Docker', icon: docker, invert: false }, 
    {title: 'Kafka', icon: kafka, invert: true }, 
    // {title: 'Spring Boot', icon: springboot, invert: false }, 
]

export const languages = [
    {title: 'Python', icon: python, invert: false }, 
    // {title: 'C++', icon: cpp, invert: false }, 
    // {title: 'C', icon: c, invert: false }, 
    {title: 'Java', icon: java, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'scala', icon: scala, invert: false },
    {title:'SSMS',icon:Ssms,invert:false}, 
    {title: 'SQL', icon: sql, invert: true }, 
    {title: 'MongoDB', icon: mongodb, invert: false },
    {title: 'PLSQL', icon: plsql, invert: false },
    

];

export const websites = [
    {
        title: 'Data Scientist', 
        description: 'As a Data Scientist at Modak Analytics, I led the development of scalable data pipelines using Python and R, incorporating AI and statistical modeling to drive predictive analytics. Enhanced strategic decision-making through sophisticated data transformation and integration into existing data warehouses. Constructed and deployed machine learning models via Azure Machine Learning and MLflow resulting in a 15% increase in customer acceptance and a 25% improvement in model accuracy, backed by effective MLOps and feature engineering practices. Additionally, I spearheaded efforts in real-time data visualization with Azure Databricks and Power BI, reducing report generation time by 35% and increasing data wrangling efficiency by 30%.', 
        stack: [],
        link: '',
        source: ""
    },
    {
        title: 'Data Engineer', 
        description: 'As a Data Engineer at Modak Analytics, I focused on enhancing ETL processes and data storage solutions, leveraging tools like Amazon S3 and Hive to boost warehousing accuracy and efficiency. My projects included streamlining data migration using Python, which improved transition reliability by 30% and efficiency by 25%. I implemented AWS Lambda in conjunction with CI/CD tools like Code Pipeline and Code Commit to automate data ingestion, saving over 50 hours of manual work each month and enhancing overall productivity. I also automated data pipeline scheduling with Python DAG scheduler, integrating rigorous unit testing and benchmarking to optimize data flow.', 
        stack: [],
        link: '',
        source: ""
    },
    {
        title: 'Data Engineer', 
        description: 'As a Data Engineer at UST Global, I built and managed Azure Data Factory pipelines that interfaced with external APIs, ensuring data aggregation and storage while maintaining compliance with regulatory standards. I developed custom scripts to optimize CRUD operations, reducing execution times by 30% and maintaining strict adherence to project deadlines. Additionally, I improved CI/CD workflows by streamlining GitHub repositories, enhancing pipeline reliability by 35% and facilitating cost-effective, seamless code deployments.', 
        stack: [],
        link: '',
        source: ""
    },
]

export const projects = [
    {
        title: "Real-Time Weather prediction with API Integration",
        description: "Led the development of a Linear Regression model, enhancing weather prediction precision by 18% using scikit-learn. Engineered API integrations to boost forecast accuracy by 27%, significantly improving decision-making for weather-dependent scenarios.",
        stack: [],
        source: "",
        media: Weather_Prediction
    },
    {
        title: "Genomic Ancestry Prediction through Advanced Machine Learning Integration",
        description: "Developed a custom Ridge Regression model from scratch for Ancestry Classification, optimizing regularization and employing k-fold cross-validation to enhance model accuracy and ensure robust performance on unseen data.",
        stack: [],
        source: "",
        media: Genomic_Ancestry_Prediction
    },

]

export const achievements = [
    { title: "Microsoft Certified: Azure Data Scientist Associate", icon: MS_DS_Associate, link: "https://drive.google.com/file/d/1afT5f_o1wR9SNVJKyrGDoxKqC26mg0UV/view?usp=sharing" }, 
    { title: "Fundamentals of the Databricks Lakehouse Platform Accreditation", icon: Databricks, link: "https://drive.google.com/file/d/1AXBM1AV8wi3LVV6ivrXXOwtvVBvTRG3v/view" }, 
    { title: "Neo4j Certified Professional", icon: Neo4j, link: "https://drive.google.com/file/d/1sNrxTUDEcWGc50gRWufBqfkiMaZ2ekwR/view" }, 
    { title: "Microsoft Certified: Azure Data Fundamentals", icon: MS_DP, link: "https://drive.google.com/file/d/1Y1MH6WYgCGW2iRk9vtAFrygmYReHIyr5/view" },
    { title: "Microsoft Certified: Azure Fundamentals", icon: MS_DP, link: "https://drive.google.com/file/d/1Txs-K6otbvmycsbAxvv6KjMInN_Az5n6/view" }
];