const PERMALINKS = [
  { link: "#", text: "Home" },
  { link: "#about", text: "About" },
  { link: "#skills", text: "Skills" },
  { link: "#projects", text: "Projects" },
  { link: "#contact", text: "Conatct" },
];

const PermaLinks = () => {
  return (
    <ul className="row gap-3 gap-lg-0 col-9 m-auto p-4">
      {PERMALINKS.map(({ link, text }) => (
        <li key={text} className="col-12 col-lg fs-6 text-center">
          <a href={link} className="text-decoration-none">
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PermaLinks;
