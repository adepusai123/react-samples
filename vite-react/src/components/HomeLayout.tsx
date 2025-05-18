import { Container, Typography } from "@mui/material";

const HomeLayout: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1">
        Welcome to the home page of our application.
      </Typography>
    </Container>
  );
};

export default HomeLayout;
