import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <>
      <Container maxWidth="sm"></Container>
      <Hero imgSrc="/hero-bg2.jpg" imgAlt="typography letters" />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .5)",
        }}
      ></Grid>
    </>
  );
};

export default Homepage;
