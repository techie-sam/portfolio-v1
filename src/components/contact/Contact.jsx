import StyledCard from "../../styles/StyledCard";
import ContactInputs from "./ContactInputs";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <section id="contact">
      <div className="text-center mt-5">
        <h6>Get in Touch</h6>
        <h5>Contact Me</h5>
      </div>
      <StyledCard className="row gap-5 m-auto">
        <ContactDetails />
        <div className="col col-lg-6 rounded rounded-5">
          <ContactInputs />
        </div>
      </StyledCard>
    </section>
  );
};

export default Contact;
