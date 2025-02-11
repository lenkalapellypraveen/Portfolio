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
      icon: 'data:image/jpeg;base64,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'
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
