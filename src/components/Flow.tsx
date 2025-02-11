import React from 'react';

interface TimelineEntry {
  title: string;
  company: string;
  description: string[];
  startDate: string;
  endDate: string;
  icon: string; // Path to the star icon or any other
}

const TimelineComponent: React.FC = () => {
  const entries: TimelineEntry[] = [
    {
      title: "Data Scientist",
      company: "Modak Analytics",
      description: [
        "Improved Google search indexability by 70% with an average CTR of 40% by fine-tuning a generative algorithm to paraphrase blogs for Shopify stores.",
        "Enhanced content readability of blogs using LLMs to achieve Gunning Fog Index scores between 9-12.",
        "Increased sign up rates by 12% through A/B testing various onboarding processes.",
        "Architected data pipelines using Apache Airflow and compiled SQL queries to visualize data on Tableau"
      ],
      startDate: "May 2022",
      endDate: "July 2024",
      icon: '../assets/skills/Data_Scientist.png'
    },
    {
      title: "Data Engineer",
      company: "Modak Analytics",
      description: [
        "Designed a content-based recommendation system using cosine similarity, processing 10K+ products",
        "Reduced data retrieval time by 15% through optimizing existing SQL queries",
        "Implemented role-based access control (RBAC) policies on database tables from 20+ sources"
      ],
      startDate: "April 2021",
      endDate: "May 2022",
      icon: '../assets/skills/Data_Engineer.png'
    }
  ];

  return (
    <div className="flex flex-col items-center my-10">
      {entries.map((entry, index) => (
        <div key={index} className="relative mb-8 pl-10">
          <div className="absolute top-0 -left-2.5 w-5 h-5 bg-blue-500 rounded-full shadow"></div>
          {index !== entries.length - 1 && <div className="absolute w-1 bg-gray-300 h-full top-5 left-0"></div>}
          <div className="flex items-start gap-4">
            <img src={entry.icon} alt="Icon" className="w-12 h-12 mt-1"/>
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{entry.title} at {entry.company}</h3>
              <p className="text-gray-400">{`${entry.startDate} - ${entry.endDate}`}</p>
              <ul className="list-disc space-y-2 pl-5">
                {entry.description.map((desc, idx) => (
                  <li key={idx} className="text-sm">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
