import Container from "@mui/material/Container";
import Hero from "../components/Hero";
import SectionAbout from "../components/SectionAbout";
import SectionImage from "../components/SectionImage";
import SectionReview from "../components/SectionReview";

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
      <SectionAbout />
      <SectionImage imgSrc="/products.jpg" imgAlt="print products" />
      <SectionReview />
    </>
  );
};

export default Homepage;
