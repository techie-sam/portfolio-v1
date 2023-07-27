import StyledFooter from "./StyledFooter";
import ContactLinks from "./ContactLinks";
import PermaLinks from "./PermaLinks";

const Footer = () => {
  return (
    <StyledFooter
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--light-slate)",
        paddingBottom: "10rem",
      }}
      className="text-light mt-5"
    >
      <div className="text-center p-3">
        <a href="#home" className="fs-3 fw-bold text-decoration-none">
          Samuel Abolade
        </a>
      </div>
      <PermaLinks />
      <ContactLinks />
      <div className="text-center mt-4">
        <small>&copy; Samuel Abolade. All right reserved.</small>
      </div>
    </StyledFooter>
  );
};

export default Footer;
