import React from "react";
import { Navigation } from "../components/nav";

const HeaderM: React.FC = () => {
  return (
    <Navigation />
  );
};

const AboutMeSection: React.FC = () => {
  return (
    <section className="mt-20 text-center mb-10 text-dark dark:text-light">
      <h1 className="mb-4 text-3xl font-bold">Hey There!</h1>
      <h1 className="mb-4 text-3xl font-bold">I'm Berke Kara.</h1>
      <p className="text-lg">
        I am Berke Kara, sophomore at UT Austin with a keen interest in machine
        learning and artificial intelligence development.
      </p>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section className="mb-10 text-dark dark:text-light">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">The Forage, Austin, TX</h3>
        <p className="italic">June 2024 - Present</p>
        <ul className="list-disc pl-5">
          <li>Build an interface with a stock price data feed and visually display data to assist JP Morgan Chase traders.</li>
          <li>Fix the broken client data feed script in the repository.</li>
          <li>Use Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.</li>
          <li>Fix broken typescript files in the repository to make the web application output correctly.</li>
        </ul>
      </div>
    </section>
  );
};

const EducationSection: React.FC = () => {
  return (
    <section className="mb-10 text-dark dark:text-light">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div>
        <h3 className="text-xl font-semibold">The University of Texas at Austin, Austin, TX</h3>
        <p className="italic">May 2027</p>
        <p>Bachelor of Science in Computer Science, GPA 3.6</p>
        <p>Relevant Coursework: Computer Organization And Architecture, Algorithms & Data Structures, Statistics and Data Sciences, Foundations of IT Management, Principles of Computer Systems</p>
      </div>
    </section>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section className="mb-10 text-dark dark:text-light">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc pl-5">
        <li>Programming Languages: Java, Python, C, Shell Scripting</li>
        <li>Libraries/Frameworks: Numpy, Pandas</li>
        <li>Version Control: Git, GitHub</li>
        <li>Web Development: JavaScript, HTML, CSS, React</li>
        <li>OS: Linux, Windows</li>
        <li>Familiar with Mobile Application Development and Design Process and SDLC</li>
        <li>Proficient in Microsoft Excel, Adobe Photoshop and Adobe Flash</li>
      </ul>
    </section>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="mb-10 text-dark dark:text-light">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="list-disc pl-5">
        <li>Guitar Hero: Simple Guitar Hero game, integrating sound synthesis and keyboard mapping. Crafted features using stack list methods to emulate guitar strings and manage user interactions. Applied wave physics principles and sampling methods to produce guitar-like sounds within the gaming interface.</li>
        <li>SnakeAI: Created an AI using DRL to generate a snake that learns how to play the snake game and excel.</li>
        <li>File Utilities: File management program to facilitate efficient file searchers and manipulating files in a computer system.</li>
        <li>Syncify: A Discord bot that integrates Spotify playlists, enabling users to create Spotify playlists on YouTube or display playlist details directly within Discord.</li>
      </ul>
    </section>
  );
};

const CertificationsSection: React.FC = () => {
  return (
    <section className="mb-10 text-dark dark:text-light">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <p>Introduction to Software Engineering - IBM, Nov 2024</p>
    </section>
  );
};

const InvolvementSection: React.FC = () => {
  return (
    <section className="mb-10 text-dark dark:text-light">
      <h2 className="text-2xl font-bold mb-4">Campus Involvement</h2>
      <ul className="list-disc pl-5">
        <li>Texas Association for Computing Machinery (ACM)</li>
        <li>UT Machine Learning and Data Science (MLDS)</li>
        <li>UT Information & Systems Security Society (ISSS)</li>
      </ul>
    </section>
  );
};


const AboutMePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light dark:bg-dark">
      <div className="bg-white dark:bg-gray-800 dark:text-white bg-opacity-80 p-6 rounded-lg shadow-lg w-3/4">
        <HeaderM />
        <AboutMeSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <InvolvementSection />
      </div>
    </div>
  );
};

export default AboutMePage;
