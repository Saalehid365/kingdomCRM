import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menubar from "./commonents/menubar";
import Dashboard from "./pages/dashboard";
import CurrentRepairs from "./pages/currentRepairs";
import ContactManagement from "./pages/contactManagement";
import ChatWith from "./pages/chatWith";
import Engineers from "./pages/engineers";
import GetTechHelp from "./pages/getTechHelp";
import PriortyRepairs from "./pages/priortyRepairs";
import Unrepairable from "./pages/unrepairable";
import SearchNav from "./commonents/searchNav";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex ">
          <Menubar />
          <div className="flex flex-col w-full">
            <SearchNav />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/currentrepairs" element={<CurrentRepairs />} />
              <Route
                path="/contactmanagement"
                element={<ContactManagement />}
              />
              <Route path="/chatwith" element={<ChatWith />} />
              <Route path="/engineers" element={<Engineers />} />
              <Route path="/gettechhelp" element={<GetTechHelp />} />
              <Route path="/priortyrepairs" element={<PriortyRepairs />} />
              <Route path="/unrepairable" element={<Unrepairable />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
