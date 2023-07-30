import React from "react"
import Image from "next/image"

const skills = [
  { skill: "C" },
  { skill: "JAVA" },
  { skill: "Python" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "BootStrap" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "EJS" },
  { skill: "JQuery" },
  { skill: "ExpressJS" },
  { skill: "NodeJS" },
  { skill: "ReactJS" },
  { skill: "NextJS" },
  { skill: "ThreeJS" },
  { skill: "Vite" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Jupyter Notebook" },
  { skill: "Streamlit" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Aditya and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Web Developer.
              based in Delhi NCR.
            </p>
            <br />
            <p>
              I have completed my 10th standard (ICSE) and 12th standard (ISC) from Kanpur. Currently I am persuing my graduation in Computer Science and Engineering with specialization in Data Science(2021-2025) from ABES Engineering College, Ghaziabad.
            </p> 
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From sketching, atheletics, basketball, to cooking food,
              I am always seeking new experiences and love to keep myself
              engaged and learning new tech stacks.
            </p>
            <br />
            <p>
            Proficient in both{" "}
              <span className="font-bold text-teal-500">
                front-end
              </span>{" "}
              and
              {" "}
              <span className="font-bold text-teal-500">
                back-end
              </span>{" "}
              technologies with a strong focus on creating user-friendly interfaces
              and I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <br />
            <br />
            <Image
              src="/hero_image.png"
              alt=""
              width={325}
              height={20}
              className="hidden md:block md:relative md:bottom-4 md:left-25 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
