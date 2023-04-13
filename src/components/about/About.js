import pic from '../../assets/me.png'
import StyledPic from './StyledPic';
import StyledCard from './StyledCard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box } from '@mui/material';


const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function About() {
  return (
    <section id='abou'>
      <div className='text-center'>
        <h6>Get To Know</h6>
        <h5>About Me</h5>
      </div>
        <div className='container m-auto d-md-flex gap-5 justify-content-between'>
          <StyledPic>
            <div className="wrapper rounded-circle">
              <img
                className="img w-100"
                src={pic}
                alt="head-shot"
              />
            </div>
          </StyledPic>

          <StyledCard>
            <ul className='row mt-3 mt-lg-5 gap-3 justify-content-center' >
              <li className='col-md-3 col' data-aos="zoom-in">
                <span>
                  <Box mb={3}>
                    <WorkspacePremiumIcon fontSize='large' />
                  </Box>
                  <h6>Experience</h6>
                  <small className='mt-5 p-3'>{currentYear - 2022}+ years Working</small>
                </span>
              </li>
              <li className='col-md-3 col' data-aos="zoom-in">                  
              <Box mb={3}>
                <WorkHistoryIcon fontSize='large' />
              </Box>
                <h6>Projects</h6>
                <small>10+ Completed</small>
              </li>
            </ul>
          </StyledCard>
        </div>
        <div className='col-12 col-sm-10 m-auto fs-6 mt-4 text-sm-center'>
          <p className='text-center' style={{textAlign:"justify"}} >Hello and welcome to my portfolio! My name is Samuel, I am a Front-end developer with proficiency in React JS. I am passionate about building things that lives on the internet, always learning and staying up-to-date with the latest technologies and developments to ensure that I am providing the best possible solutions to my clients.
          </p>
          <a href="#contact" className="btn btnPrimary p-3">Let's Talk</a>
        </div>
    </section>
  );
}
export default About