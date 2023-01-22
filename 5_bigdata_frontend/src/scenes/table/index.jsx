import { Box, colors, useTheme } from "@mui/material";

import { BasicTable } from "../../components/BasicTable";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Table = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="Top Ten Most liked Tweets"
        subtitle="Table with the number of tweets, content and url"
      />
      <Box>
        <BasicTable />
      </Box>
    </Box>
  );
};

export default Table;
