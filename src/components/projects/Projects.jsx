import StyledCard from "../../styles/StyledCard";
import quizlet from "../../assets/quizlet.png";
import portfolio from "../../assets/personal-website-image.png";
import vbank from "../../assets/V-bank.png";
import trems from "../../assets/trems-nigeria.png";
import harmonyheaven from "../../assets/harmony-heaven.jpg";
import { motion } from "framer-motion";
import { textVariants } from "../../styles/ScrollEffectAnimationVariant";

const Projects = () => {
  const PROJECTS = [
    {
      name: "Trems Nigeria",
      liveDemo: "https://tremsnigeria.com",
      image: trems,
      gitHub: "#",
      description:
        "A website has significantly boosted TREMS Nigeria brand income through its Search Engine Optimization (SEO), seamless user experience, intuitive navigation which have attracted a significant influx of new clients",
    },
    {
      name: "Harmony Heaven",
      liveDemo: "https://harmonyheaven.vercel.app",
      image: harmonyheaven,
      gitHub: "https://github.com/techie-sam/quizlet",
      description:
        "A hotel website which entice potential guests and provide them with essential information, as room availability, booking options, and also providing seamless navigation.",
    },
    {
      name: "V Bank",
      liveDemo: "https://vbank.vercel.app/",
      image: vbank,
      gitHub: "https://github.com/techie-sam/v-bank",
      description:
        "A functional banking solution which offers a range of basic features. It allows users to simulate transactions, manage accounts, and view balances in a secure and reliable environment.",
    },
    {
      name: "Quizlet Quiz App",
      liveDemo: "https://quizlet001.vercel.app",
      image: quizlet,
      gitHub: "https://github.com/techie-sam/cbt_react_app",
      description:
        "A test app designed to combats exam malpractice. Create and take tests online with multiple-choice questions, timed tests, and advanced analytics for progress tracking.",
    },

    // {
    //     name: "",
    //     liveDemo: "",
    //     image: null,
    //     gitHub: "",
    //     description: ""

    // },
    // {
    //     name: "",
    //     liveDemo: "",
    //     image: null,
    //     gitHub: "",
    //     description: ""

    // },
  ];

  return (
    <section id="projects">
      <div className="text-center mt-5 mb-5">
        <h6>Recent Projects</h6>
        <h5>Projects</h5>
      </div>
      <StyledCard>
        <ul className="row gap-3">
          {PROJECTS.map(({ name, liveDemo, gitHub, image, description }) => (
            <motion.li
              variants={textVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="col-sm col-12 border"
              key={name}
            >
              <div>
                <img src={image} className="w-100" alt={name} />
                <h5 className="p-2">{name}</h5>
                <div className="text-justify" style={{ fontSize: 12 }}>
                  {description}
                </div>
              </div>
              <div className="mt-2">
                <a
                  href={liveDemo}
                  target={name === "Portfolio Website" ? null : "_blank"}
                  rel="noreferrer"
                  className="btn btnPrimary m-1"
                >
                  Live Demo
                </a>
                <a
                  href={gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnPrimary m-1"
                >
                  Github
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </StyledCard>
    </section>
  );
};

export default Projects;
