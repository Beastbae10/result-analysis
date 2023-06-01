import { useState } from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
/*import  Login  from "./pages/Login/login";*/
import Topbar from "./pages/global/topbar";
import Sidebar from "./pages/global/sidebar";
import Overview from "./pages/Overview/overview";
import Analytics from "./pages/Analytics/analytics";
import Dashboard from "./pages/Dashboard/dashboard";
import Students from "./pages/Students/students";
import Settings from "./pages/Settings/settings";
//import BarChart from "./components/BarChart";
//import LineChart from "./components/LineChart";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./pages/theme";
/*import { Dashboard } from "@mui/icons-material";*/



function App ()  {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <div className="app">
        <Sidebar />
        <main className="content">
        <Topbar  />
        
        
        <Routes>
              
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/settings" element={<Settings />} />
              {/*<Route path="/BarChart" element={<BarChart />} />
              <Route path="/LineChart" element={<LineChart />} />*/}
             
              
              
              </Routes>
              
        </main>
        </div>
        
        </ThemeProvider>
    </ColorModeContext.Provider>
    );
    };



export default App;
