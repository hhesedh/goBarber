import React from "react";
import ToastContainer from "./components/ToastContainer";
import { AuthProvider } from "./hooks/AuthContext";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global";

export const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
