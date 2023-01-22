import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import fifa from "../../data/fifa.jpg";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Header
          title="Fifa World Cup 2022"
          subtitle="Analyzing Twitter Data regarding the Fifa World Cup"
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src={fifa}
          alt="fifa"
          height="300px"
          width="600px"
          style={{ marginTop: "20px", borderRadius: "10px" }}
        ></img>
      </Box>
    </Box>
  );
};

export default Dashboard;
