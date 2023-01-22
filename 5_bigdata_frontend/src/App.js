import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Bar from "./scenes/bar";
import Geography from "./scenes/geography";
import TopNReply from "./scenes/topnreplies";

import Table from "./scenes/table";
import TopNLike from "./scenes/topnlikes";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            {/* <Topbar /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/topnreplies" element={<TopNLike />} />
              <Route path="/table" element={<Table />} />
              <Route path="/topnlikes" element={<TopNLike />} />
            </Routes>
          </main>
        </div>
        ;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
