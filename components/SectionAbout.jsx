import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/business-card.svg"
            alt="A Chef"
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            Мы упрощаем печать
          </Typography>
          <Typography textAlign="center" variant="body2">
            {`Мы предлагаем качественные услуги печати для широкого спектра продуктов, чтобы удовлетворить все потребности вашего бизнеса — от визитных карточек, брошюр, листовок до этикеток и больших баннеров. Что бы вам ни понадобилось напечатать, у нас есть решения для печати, которые помогут вашему бизнесу добиться успеха`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
