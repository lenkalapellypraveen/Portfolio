import React from 'react';

interface TimelineEntry {
  title: string;
  company: string;
  description: string[];
  startDate: string;
  endDate: string;
  icon: string; // Path to the icon
}

const TimelineComponent: React.FC = () => {
  const entries: TimelineEntry[] = [
    {
      title: "Master of Science - Data Science and Analytics",
      company: "Florida Atlantic University",
      description: [
        "Related Courses: Intro to Data Science, Intro to Business Analytics and Big data, Data Mining and Machine Learning,", 
        "Deep Learning, Database Management Systems, Data Management and Analysis with Excel, Cloud Computing,", 
        "Artificial Intelligence, Big Data Analytics with Hadoop, Reinforcement Learning."
      ],
      startDate: "August 2023",
      endDate: "December 2024",
      icon: ''
    },
    {
      title: "Data Scientist",
      company: "Modak Analytics",
      description: [
        "• Led the development of large-scale data pipelines using Python, focusing on AI and statistical",
        " modeling for predictive analytics and complex GenAI challenges.",
        "• Constructed machine learning models using Azure Machine Learning, boosting model accuracy by 25%.",
        " Employed MLOps for streamlined deployment, and feature engineering within the Azure OpenAI.",
        "• Integrated Azure Databricks with Power BI for real-time data visualization, facilitating ",
        "process optimization and data manipulation by reducing report generation time by 35%.",
        "• Developed SQL frameworks and Python algorithms with Natural Language Processing for trend analysis,",
        " cutting query response time by 30% and boosting management decision efficiency by 15%.",
        "• Applied complex statistical methods and machine learning algorithms to enhance operational efficiency by 25%,",
        " seamlessly integrating approaches into various GenAI applications to comply with evolving industry standards.",
        "• Developed algorithms using Python to analyze real-time data streams via Confluent Kafka, employing research, ",
        "A/B testing, and applied mathematics to identify emergent patterns, enhancing operational responsiveness by 35%."
      ],
      startDate: "May 2022",
      endDate: "July 2024",
      icon: ''
    },
    {
      title: "Data Engineer",
      company: "Modak Analytics",
      description: [
        "• Developed bulk ingestion data pipelines using StreamSets, and custom-coded pipelines in Spark-Scala",
        "/PySpark for ETL operations into Amazon S3 and Hive, enhancing data warehousing accuracy by 20%.",
        "• Configured AWS Lambda in conjunction with CI/CD tools such as CodePipeline and CodeCommit, automating ",
        "data migration processes with Python scripts to eliminate over 50 hours of manual tasks monthly.",
        "• Optimized business operations by automating data pipeline scheduling with Python DAG scheduler,",
        " orchestrating sequential and dependent data flows to enhance overall data processing efficiency."
      ],
      startDate: "April 2021",
      endDate: "May 2022",
      icon: ''
    },
    {
      title: "Data Engineer",
      company: "UST Global",
      description: [
        "• Built Azure Data Factory pipelines to aggregate data from external APIs, improving data accessibility",
        "and ensuring regulatory compliance for healthcare-related data.",
        "• Crafted custom scripts to optimize CRUD operations in database management systems,",
        "reducing execution time by 30% and supporting business operations.",
        "• Streamlined GitHub repositories and enhanced CI/CD workflows using advanced scripting,",
        "improving pipeline reliability by 35% and ensuring seamless code deployments."
      ],
      startDate: "July 2020",
      endDate: "April 2021",
      icon: ''
    },
    {
      title: "Bachelor of Technology - Electronics and Communications Engineering",
      company: "Gokaraju Rangaraju Institute of Engineering and Technology",
      description: [
        "Related Courses: Data Structures and Algorithms, C Programming, Object Oriented Programming in JAVA,", 
        "Computer Networks, Programming, Data Structures and Algorithms in Python, Digital Image Processing,",
        "Wireless Communications and Networks, Principles of Cloud Computing."
      ],
      startDate: "July 2017",
      endDate: "April 2021",
      icon: ""
    }
  ];

  return (
    <div className="mt-20 flex flex-col">
      <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
        {entries.map((entry, index) => (
          <div key={index} className="vertical-timeline-element">
            <span className="vertical-timeline-element-icon bounce-in" style={{ background: index % 2 === 0 ? 'rgb(56, 62, 86)' : 'rgb(230, 222, 221)' }}>
              <div className="flex justify-center items-center w-full h-full">
                <img src={entry.icon} alt="Icon" className="w-[60%] h-[60%] object-contain" />
              </div>
            </span>
            <div className="vertical-timeline-element-content bounce-in" style={{ background: 'rgb(29, 24, 54)', color: 'rgb(255, 255, 255)' }}>
              <div className="vertical-timeline-element-content-arrow" style={{ borderRight: '7px solid rgb(35, 38, 49)' }}></div>
              <div>
                <h3 className="text-white text-[24px] font-bold">{entry.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: '0px' }}>{entry.company}</p>
              </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {entry.description.map((desc, idx) => (
                  <li key={idx} className="text-white-100 text-[14px] pl-1 tracking-wider">{desc}</li>
                ))}
              </ul>
              <span className="vertical-timeline-element-date">{entry.startDate} - {entry.endDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
