import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Layout/Home/Home";
import Auth from "./Components/Auth/Auth";
import Account from "./Components/Dashboard/Account";
import KifPage from "./Components/Layout/KifPage/KifPage";
import NotFound from "./Components/Layout/NotFound/NotFound";
import EditForm from "./Components/Layout/EditForm/EditForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
        <Route path="/:user" element={<KifPage />} />
        <Route path="/edit" element={<EditForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
