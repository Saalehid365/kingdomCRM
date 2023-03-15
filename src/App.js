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
import Addrepair from "./pages/addrepair";
import SignUp from "./commonents/signUp";
import { AuthContextProvider } from "./commonents/context";
import Login from "./commonents/login";
import Protected from "./commonents/protectedroute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <div className="flex ">
            <Menubar className=" bottom-auto" />
            <div className="flex flex-col w-full">
              <SearchNav />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route element={<Protected />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="currentrepairs" element={<CurrentRepairs />} />

                  <Route
                    path="currentrepairs/addrepair"
                    element={<Addrepair />}
                  />

                  <Route
                    path="/contactmanagement"
                    element={<ContactManagement />}
                  />
                  <Route path="chatwithengineers" element={<ChatWith />} />
                  <Route path="engineers" element={<Engineers />} />
                  <Route path="gethelp" element={<GetTechHelp />} />
                  <Route path="priortyrepairs" element={<PriortyRepairs />} />
                  <Route path="unrepairable" element={<Unrepairable />} />
                </Route>
              </Routes>
            </div>
          </div>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
