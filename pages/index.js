import Container from "@mui/material/Container";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <>
      <Container maxWidth="sm"></Container>
      <Hero
        imgSrc="/hero-bg.jpg"
        imgAlt="typography letters"
        title="This is a title"
        subtitle="this is a subtitle"
      />
    </>
  );
};

export default Homepage;
