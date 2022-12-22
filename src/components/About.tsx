import React from "react";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome😃, I'm Justice.
            <br className="hidden lg:inline-block" /> I eat, sleep and build high
            quality mobile apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a software engineer specialized in Mobile development.
            Developing software applications is something that I am enthusiastic
            about, especially when it comes to building mobile apps. I have
            experience in building Android and cross platform applications. For
            example, I have built and worked on a HR onboarding chatbot,
            maintenance app for agriculture measuring devices, Global Talk Care
            App and Slam Fm Radio app. Each of these apps were developed with
            one of the following technologies: React Native, Kotlin or Flutter.
            My ambition as a developer is to strive for quality over quantity by
            following best code practices and architecture patterns like MVVM,
            DI and state management. I also look forward to further improving my
            development skills by following software development processes like
            Test Driven Development. In my spare time, I focus on my training
            for Track and Field, which I specialized in eight hundred meters.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-md"
            alt="Justice Dreischor profile picture"
            src="./assets/images/profile-pic-2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
