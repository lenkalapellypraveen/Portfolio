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
      icon: 'data:image/png;base64,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'
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
      icon: '../assets/skills/Data_Scientist.png'
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
      icon: '../assets/skills/Data_Engineer.png'
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
      icon: '../assets/skills/Data_Engineer.png'
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
      icon: '../assets/skills/Data_Engineer.png'
    }
  ];

  return (
    <div>
      <h2 className="mb-16 text-6xl font-bold text-center">Experience & Education</h2>
      <div className="relative m-10">
        <div className="absolute inset-0 flex items-center justify-center w-0.5 bg-gray-300" style={{ left: '50%' }}></div>
        {entries.map((entry, index) => (
          <div key={index} className={`flex ${index % 2 === 1 ? 'justify-end' : 'justify-start'} my-5`}>
            <div className={`flex items-center space-x-4 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <img src={entry.icon} alt="Icon" className="w-10 h-10" />
              <div className="bg-gray-300 p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold">{entry.title}</h3>
                <p className="text-lg">{entry.company}</p>
                <span className="text-sm">{`${entry.startDate} - ${entry.endDate}`}</span>
                <ul>
                  {entry.description.map((desc, idx) => (
                    <li key={idx} className="text-sm">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
