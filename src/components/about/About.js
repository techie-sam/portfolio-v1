import AboutCards from './AboutCards';
import AboutText from './AboutText';
import HeadShot from './HeadShot';


function About() {
  return (
    <section className="card-container" id='about'>
      <div className='text-center'>
        <h6>Get To Know</h6>
        <h5>About me</h5>
      </div>
      <div className='container m-auto d-md-flex gap-5 justify-content-between'>
        <HeadShot />
        <AboutCards />
      </div>
      <AboutText />
    </section>
  );
}
export default About