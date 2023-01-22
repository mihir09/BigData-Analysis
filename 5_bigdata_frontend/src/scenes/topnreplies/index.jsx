import { Box, colors, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { TopNRep } from "../../components/TopNReplies";

const TopNReply = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Top N Reply" subtitle="RunTimes for top N liked tweets" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box height="75vh" width="75vw">
          <TopNRep />
        </Box>
      </Box>
    </Box>
  );
};

export default TopNReply;
