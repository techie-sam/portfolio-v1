import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import {
  githubAddress,
  linkedinAddress,
  twitterAddress,
} from "../../contact-links";

const ContactLinks = () => {
  return (
    <div className="text-center gap-3">
      <a
        href={twitterAddress}
        rel="noreferrer"
        target="_blank"
        className="mx-2 rounded"
      >
        <Twitter />
      </a>
      <a
        href={linkedinAddress}
        rel="noreferrer"
        target="_blank"
        className="mx-2 rounded"
      >
        <LinkedIn />
      </a>
      <a
        href={githubAddress}
        rel="noreferrer"
        target="_blank"
        className="mx-2 rounded"
      >
        <GitHub />
      </a>
    </div>
  );
};

export default ContactLinks;
