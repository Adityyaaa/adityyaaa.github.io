import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "3D Wardrope Customization Platform",
    description:
      "A open platform where users can customize their t-shirt according to them through various tools, can upload their logo from their device and can download the same.",
    image: "/war.png",
    github: "https://github.com/Adityyaaa/3D_Shirt_Customization_Platform",
    link: "https://github.com/Adityyaaa/3D_Shirt_Customization_Platform",
  },
  {
    name: "Text-To-AI Image Generator",
    description: "A public showcase community where users can generate images multiple times as per their specifications specified and can upload them at our showcase gallery, providing a feature of downloading generated images of ours as well as of others.",
    image: "/ai.png",
    github: "https://github.com/Adityyaaa/AI_Text_To_Image_Generator",
    link: "https://github.com/Adityyaaa/AI_Text_To_Image_Generator",
  },
  {
    name: "Multiple Disease Prediction",
    description:
      "An initiative taken to cure the society's health by knowing their health condition beforehand to let them make the decision at an early stage",
    image: "/mul_dis.png",
    github: "https://github.com/Adityyaaa/Multiple_Disease_Prediction",
    link: "https://github.com/Adityyaaa/Multiple_Disease_Prediction",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
