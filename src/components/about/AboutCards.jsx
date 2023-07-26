import StyledCard from "../../styles/StyledCard";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { cardVariants } from "../../styles/ScrollEffectAnimationVariant";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const AboutCards = () => {
  return (
    <StyledCard>
      <ul className="row mt-3 mt-lg-5 gap-3 justify-content-center">
        <motion.li
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="col-md-3 col"
          data-aos="zoom-in"
        >
          <Box mb={3}>
            <WorkspacePremiumIcon fontSize="large" />
          </Box>
          <h6>Experience</h6>
          <small className="mt-5 p-3">2+ years</small>
        </motion.li>

        <motion.li
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="col-md-3 col"
          viewport={{ once: true }}
          data-aos="zoom-in"
        >
          <Box mb={3}>
            <WorkHistoryIcon fontSize="large" />
          </Box>
          <h6>Projects</h6>
          <small>10+ Completed</small>
        </motion.li>
      </ul>
    </StyledCard>
  );
};

export default AboutCards;
