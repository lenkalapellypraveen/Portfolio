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
      <div className="absolute inset-0 flex items-center justify-center w-0.5 bg-gray-300" style={{ left: '50%' }}></div>
      {entries.map((entry, index) => (
        <div key={index} className={`flex ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
          <div className={`flex items-center space-x-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <img src={entry.icon} alt="Icon" className="w-10 h-10" />
            <div className="bg-white p-4 rounded-lg shadow">
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
  );
};

export default TimelineComponent;
