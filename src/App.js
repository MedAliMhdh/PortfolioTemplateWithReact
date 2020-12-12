import React from "react";
import Header from "./components/header";
import AboutMe from "./components/AboutMe";
import img from "./img.png";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let projectList = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      gitHubLink: "https://github.com/MedAliMhdh/ReactMovieApp",
      imgSrc: "./project.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      gitHubLink: "https://github.com/MedAliMhdh/ReactMovieApp",
      imgSrc: "./project.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      gitHubLink: "https://github.com/MedAliMhdh/ReactMovieApp",
      imgSrc: "./project.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      gitHubLink: "https://github.com/MedAliMhdh/ReactMovieApp",
      imgSrc: "./project.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      gitHubLink: "https://github.com/MedAliMhdh/ReactMovieApp",
      imgSrc: "./project.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      gitHubLink: "https://github.com/MedAliMhdh/ReactMovieApp",
      imgSrc: "./project.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
      gitHubLink: "https://github.com/MedAliMhdh/ReactMovieApp",
      imgSrc: "./project.png",
    },
  ];
  return (
    <div className="App">
      <Header
        name="Mohamed Ali Mahdhaoui"
        navb={["About", "Projects", "Contact"]}
      />
      <AboutMe name="Mohamed Ali Mahdhaoui">
        <img className="avatar" src={img} />
      </AboutMe>
      <Projects list={projectList} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
