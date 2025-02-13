import { ML_Engineer, Data_Scientist, docker, Data_Engineer, Cloud_Engineer, kafka, PowerBi } from '../assets';
import { Ssms, python, sql, git, javascript, mongodb, nodejs, reactjs, tailwind, typescript } from '../assets';
import { java, azure, gcp, tableau, kubernetes, excel, jenkins, scala, plsql} from '../assets';
import { github, Weather_Prediction, Microsoft_Fabric, Genomic_Ancestry_Prediction, Polyp, MS_DS_Associate, Neo4j, Databricks, MS_DP} from '../assets/index';

// URL for the resume
export const resumeLink: string = "https://drive.google.com/file/d/1CLpq41i35JeQUcCY4JSjF3UrYw7GmErp/view?usp=sharing";

// About Me text
export const aboutMe: string = "I leverage advanced analytics and programming skills to transform large datasets into actionable insights, utilizing statistical methods and machine learning algorithms to drive strategic decisions and drive innovation. My expertise bridges the gap between raw data and significant business outcomes.";

// Skills
export const skills: { title: string, icon: string }[] = [
    { title: "Data Scientist", icon: Data_Scientist },
    { title: "Data Engineer", icon: Data_Engineer },
    { title: "Machine Learning Engineer", icon: ML_Engineer },
    { title: "Cloud Engineer", icon: Cloud_Engineer }
];

// Frameworks
export const frameworks: { title: string, icon: string, invert: boolean }[] = [
    { title: 'Azure', icon: azure, invert: false },
    { title: 'GCP', icon: gcp, invert: false },
    { title: 'Excel', icon: excel, invert: false },
    { title: 'PowerBi', icon: PowerBi, invert: false },
    { title: 'Kubernetes', icon: kubernetes, invert: false },
    { title: 'Jenkins', icon: jenkins, invert: true },
    { title: 'Git', icon: git, invert: false },
    { title: 'Docker', icon: docker, invert: false },
    { title: 'Kafka', icon: kafka, invert: true }
];

// Languages
export const languages: { title: string, icon: string, invert: boolean }[] = [
    { title: 'Python', icon: python, invert: false },
    { title: 'Java', icon: java, invert: false },
    { title: 'JavaScript', icon: javascript, invert: false },
    { title: 'Scala', icon: scala, invert: false },
    { title: 'SSMS', icon: Ssms, invert: false },
    { title: 'SQL', icon: sql, invert: true },
    { title: 'MongoDB', icon: mongodb, invert: false },
    { title: 'PLSQL', icon: plsql, invert: false }
];

// Websites
export const websites: { title: string, description: string, stack: string[], link: string, source: string }[] = [
    {
        title: 'Data Scientist',
        description: 'As a Data Scientist at Modak Analytics, I led the development of scalable data pipelines using Python and R, incorporating AI and statistical modeling to drive predictive analytics...',
        stack: [],
        link: '',
        source: ''
    },
    {
        title: 'Data Engineer',
        description: 'As a Data Engineer at Modak Analytics, I focused on enhancing ETL processes and data storage solutions, leveraging tools like Amazon S3 and Hive to boost warehousing accuracy...',
        stack: [],
        link: '',
        source: ''
    },
    {
        title: 'Data Engineer',
        description: 'As a Data Engineer at UST Global, I built and managed Azure Data Factory pipelines that interfaced with external APIs, ensuring data aggregation and storage...',
        stack: [],
        link: '',
        source: ''
    }
];

// Projects
export const projects: { title: string, description: string, stack: string[], source: string, media: string }[] = [
    {
        title: "Real-Time Weather prediction with API Integration",
        description: "Led the development of a Linear Regression model, enhancing weather prediction precision by 18% using scikit-learn...",
        stack: [],
        source: "",
        media: Weather_Prediction
    },
    {
        title: "Genomic Ancestry Prediction through Advanced Machine Learning Integration",
        description: "Developed a custom Ridge Regression model from scratch for Ancestry Classification...",
        stack: [],
        source: "",
        media: Genomic_Ancestry_Prediction
    }
];

// Achievements
export const achievements: { title: string, icon: string, link: string }[] = [
    { title: "Microsoft Certified: Azure Data Scientist Associate", icon: MS_DS_Associate, link: "https://drive.google.com/file/d/1afT5f_o1wR9SNVJKyrGDoxKqC26mg0UV/view?usp=sharing" },
    { title: "Fundamentals of the Databricks Lakehouse Platform Accreditation", icon: Databricks, link: "https://drive.google.com/file/d/1AXBM1AV8wi3LVV6ivrXXOwtvVBvTRG3v/view" },
    { title: "Neo4j Certified Professional", icon: Neo4j, link: "https://drive.google.com/file/d/1sNrxTUDEcWGc50gRWufBqfkiMaZ2ekwR/view" },
    { title: "Microsoft Certified: Azure Data Fundamentals", icon: MS_DP, link: "https://drive.google.com/file/d/1Y1MH6WYgCGW2iRk9vtAFrygmYReHIyr5/view" },
    { title: "Microsoft Certified: Azure Fundamentals", icon: MS_DP, link: "https://drive.google.com/file/d/1Txs-K6otbvmycsbAxvv6KjMInN_Az5n6/view" }
];

// Experiences
export const experiences: { title: string, company_name: string, iconBg: string, date: string, points: string[] }[] = [
    {
        title: "Data Scientist",
        company_name: "Modak Analytics",
        iconBg: "#383E56",
        date: "June 2023 - Dec 2023",
        points: [
            "Improved Google search indexability by 70% with an average CTR of 40% by fine-tuning a generative algorithm to paraphrase blogs for Shopify stores.",
            "Enhanced content readability of blogs using LLMs to achieve Gunning Fog Index scores between 9-12.",
            "Increased sign up rates by 12% through A/B testing various onboarding processes.",
            "Architected data pipelines using Apache Airflow and compiled SQL queries to visualize data on Tableau"
        ]
    },
    {
        title: "Data Science Intern",
        company_name: "Modak Analytics",
        iconBg: "#E6DEDD",
        date: "April 2023 - June 2023",
        points: [
            "Designed a content-based recommendation system using cosine similarity, processing 10K+ products",
            "Reduced data retrieval time by 15% through optimizing existing SQL queries",
            "Implemented role-based access control (RBAC) policies on database tables from 20+ sources"
        ]
    }
];
