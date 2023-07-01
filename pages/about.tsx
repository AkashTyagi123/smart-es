import React from 'react';

const About = () => {
  return (
    <div className="pt-5 mt-5 relative top-10">
      <div className="w-1/2 ml-auto mr-auto">
        <h1 className="text-2xl font-bold text-indigo-500 mb-4">About Us</h1>
        <p className="text-gray-800 mb-6">
          Welcome to our website! We are a team passionate about utilizing artificial intelligence for examination purposes. Our goal is to provide a seamless and efficient experience for students and educators alike.
        </p>

        <p className="text-gray-800 mb-6">
          Our mission is to provide a cutting-edge platform that enables educators to create and administer AI-powered exams that accurately assess students' knowledge and skills.
        </p>
        <p className="text-gray-800 mb-6">
          Through the use of advanced algorithms and machine learning techniques, we aim to deliver personalized and adaptive assessments that adapt to each student's unique learning journey.
        </p>
        <p className="text-gray-800">
          With our intuitive user interface and powerful AI capabilities, we strive to make the examination experience seamless, efficient, and insightful for both students and educators.
        </p>

        <p className='mt-7 font-bold'>Regards,</p>
        <p className='font-bold'>Engineers @ Abhiyas Portal</p>
      </div>
    </div>
  );
};

export default About;