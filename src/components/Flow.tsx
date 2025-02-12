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
  return (
    <div>
      <h2 className="mb-16 text-6xl font-bold text-center">Experience & Education</h2>
      <div className="mt-20 flex flex-col">
        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
          {/* First Entry */}
          <div id="" className="vertical-timeline-element">
            <span className="vertical-timeline-element-icon bounce-in" style={{ background: 'rgb(56, 62, 86)' }}>
              <div className="flex justify-center items-center w-full h-full">
                <img src="" alt="FlareAI" className="w-[60%] h-[60%] object-contain" />
              </div>
            </span>
            <div className="vertical-timeline-element-content bounce-in" style={{ background: 'rgb(29, 24, 54)', color: 'rgb(255, 255, 255)' }}>
              <div className="vertical-timeline-element-content-arrow" style={{ borderRight: '7px solid rgb(35, 38, 49)' }}></div>
              <div>
                <h3 className="text-white text-[24px] font-bold">Data Scientist</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: '0px' }}>Modak Analytics</p>
              </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">Improved Google search indexability by 70% with an average CTR of 40% by fine-tuning a generative algorithm to paraphrase blogs for Shopify stores.</li>
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">Enhanced content readability of blogs using LLMs to achieve Gunning Fog Index scores between 9-12.</li>
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">Increased sign up rates by 12% through A/B testing various onboarding processes.</li>
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">Architected data pipelines using Apache Airflow and compiled SQL queries to visualize data on Tableau.</li>
              </ul>
              <span className="vertical-timeline-element-date">June 2023 - Dec 2023</span>
            </div>
          </div>

          {/* Second Entry */}
          <div id="" className="vertical-timeline-element">
            <span className="vertical-timeline-element-icon bounce-in" style={{ background: 'rgb(230, 222, 221)' }}>
              <div className="flex justify-center items-center w-full h-full">
                <img src="" alt="FlareAI" className="w-[60%] h-[60%] object-contain" />
              </div>
            </span>
            <div className="vertical-timeline-element-content bounce-in" style={{ background: 'rgb(29, 24, 54)', color: 'rgb(255, 255, 255)' }}>
              <div className="vertical-timeline-element-content-arrow" style={{ borderRight: '7px solid rgb(35, 38, 49)' }}></div>
              <div>
                <h3 className="text-white text-[24px] font-bold">Data Science Intern</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: '0px' }}>Modak Analytics</p>
              </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">Designed a content-based recommendation system using cosine similarity, processing 10K+ products.</li>
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">Reduced data retrieval time by 15% through optimizing existing SQL queries.</li>
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">Implemented role-based access control (RBAC) policies on database tables from 20+ sources.</li>
              </ul>
              <span className="vertical-timeline-element-date">April 2023 - June 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
