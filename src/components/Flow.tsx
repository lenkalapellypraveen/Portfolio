import React, { useRef, useEffect, useState } from 'react';

interface TimelineEntry {
  title: string;
  company: string;
  description: string[];
  startDate: string;
  endDate: string;
  icon: string;
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

  // Use the last entry's ref to adjust the line length
  const lastItemRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lastItemRef.current) {
      setLineHeight(lastItemRef.current.offsetTop);
    }
  }, [lastItemRef]);

  return (
    <div className="relative flex flex-col items-center mt-10">
      {entries.map((entry, index) => (
        <div key={index} className="flex flex-col items-center text-center p-5 bg-gray-800 text-white w-96 rounded-lg my-4">
          <img src={entry.icon} alt="Icon" className="w-12 h-12 mb-4"/>
          <h3 className="text-xl font-bold">{entry.title} at {entry.company}</h3>
          <p className="text-sm">{`${entry.startDate} - ${entry.endDate}`}</p>
          <ul className="list-disc mt-2">
            {entry.description.map((desc, idx) => (
              <li key={idx} className="text-sm">{desc}</li>
            ))}
          </ul>
          {index === entries.length - 1 ? <div ref={lastItemRef}></div> : null}
        </div>
      ))}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500" style={{ height: `${lineHeight}px` }}></div>
    </div>
  );
};

export default TimelineComponent;
