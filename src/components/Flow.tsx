import React from 'react';
import { Data_Scientist } from '../assets';
import { Data_Engineer } from '../assets';

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
      icon: {Data_Scientist}
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
      icon: {Data_Engineer}
    }
  ];

  return (
    <div className="flex flex-col mt-20 gap-8">
      {entries.map((entry, index) => (
        <div key={index} className="flex flex-col items-center sm:flex-row sm:justify-center gap-4">
          <div className="flex items-center">
            <img src={entry.icon} alt="Icon" className="w-10 h-10"/>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white text-xl font-bold">{entry.title}</h3>
              <p className="text-secondary text-lg font-semibold">{entry.company}</p>
              <span className="text-gray-400 text-sm">{`${entry.startDate} - ${entry.endDate}`}</span>
            </div>
          </div>
          <ul className="list-disc bg-[#1D1836] p-4 rounded-lg text-white">
            {entry.description.map((desc, idx) => (
              <li key={idx} className="text-sm">{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
