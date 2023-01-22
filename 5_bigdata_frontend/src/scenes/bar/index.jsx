import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Tweets Over 2022" subtitle="Number of tweets per month" />
      <Box height="70vh" width="75vw">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
