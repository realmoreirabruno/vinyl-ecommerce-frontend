import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import Initial from "./pages/Initial";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Discs from "./pages/Discs";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster position="top-right" reverseOrder />
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="*"
            element={
              <h1 className="mt-8 text-3xl text-center">
                Página não encontrada.
              </h1>
            }
          />
          <Route path="/" index element={<Initial />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-discs" element={<Discs />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  </>
);