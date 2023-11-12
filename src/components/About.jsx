import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a skilled Full Stack Developer with 4 years of experience.
         Skilled in both front-end and back-end development, 
         I've successfully delivered numerous projects aligned with client requirements.
          My expertise spans programming languages, frameworks, and databases. 
          Passionate about staying up-to-date with the latest tech trends, 
          I thrive in collaborative environments and possess strong problem-solving abilities. 
          
        </p>

        <br />

        <p className="text-xl">
        With a deep passion for technology, 
        I am currently most interested in software testing technologies and would love to further develop my expertise in this field.
         If you are seeking a dedicated Full Stack Developer who can bring your ideas to life,
          I am ready to collaborate with you. Let's work together to develop innovative solutions for your organization's success,
           with a particular focus on advancing software testing technologies.
        </p>
      </div>
    </div>
  );
};

export default About;