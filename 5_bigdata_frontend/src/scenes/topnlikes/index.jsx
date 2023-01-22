import { Box, colors, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { TopNLikes } from "../../components/TopNLikes";

const TopNLike = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Top N Likes" subtitle="RunTimes for top N liked tweets" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box height="75vh" width="75vw">
          <TopNLikes />
        </Box>
      </Box>
    </Box>
  );
};

export default TopNLike;
