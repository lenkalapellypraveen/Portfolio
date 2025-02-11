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
    <div className="relative m-10">
      <div className="absolute inset-0 m-auto z-0 w-1 bg-gray-300" style={{ left: '50%' }}></div>
      {entries.map((entry, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end text-right'} mb-8`}>
          <div className="flex items-center space-x-4">
            <img src={entry.icon} alt="Icon" className={`w-10 h-10 ${index % 2 === 1 && 'order-last ml-4'}`} />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{entry.title}</h3>
              <p className="text-lg text-gray-600">{entry.company}</p>
              <span className="text-sm text-gray-500">{`${entry.startDate} - ${entry.endDate}`}</span>
            </div>
          </div>
          <ul className="mt-2 bg-white shadow-lg rounded-lg p-4 w-72">
            {entry.description.map((desc, idx) => (
              <li key={idx} className="text-gray-700 text-sm list-disc">{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
