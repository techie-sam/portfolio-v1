import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";
import { cardVariants } from "../../styles/ScrollEffectAnimationVariant";
const TECHNOLOGIES = [
  "React",
  "Next",
  "Redux",
  "TailwindCSS",
  "Bootstrap",
  "NodeJS",
];

const Technologies = () => {
  return (
    <motion.li
      className="col"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
    >
      <h4>Technologies</h4>
      <div>
        <div className="row justify-content-evenly gap-4 mt-4 m-auto text-center">
          {TECHNOLOGIES.map((technology) => (
            <div
              style={{ fontSize: "0.9em" }}
              key={technology}
              className="col-5 m-auto text-start"
            >
              <VerifiedIcon style={{ fontSize: "1em" }} /> {technology}
            </div>
          ))}
        </div>
      </div>
    </motion.li>
  );
};

export default Technologies;
