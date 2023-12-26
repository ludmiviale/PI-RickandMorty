import photoAbout from "../../assets/photoAbout.png";
/* styles */
import "../detail/detail.css";

const About = () => {
  return (
    <div className="detail">
      <p>This application was created by...</p>
      <h1>Ludmila Grisel Viale</h1>
      <h3 variant="h6">Status: Alive</h3>
      <h3 variant="h6">Species: Human</h3>
      <h3 variant="h6">Gender: Female</h3>
      <h3 variant="h6">Origin: Earth</h3>
      <img src={photoAbout} alt="Ludmi" />
    </div>
  );
};

export default About;
