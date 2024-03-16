import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";
import { HashLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading (true);
    setTimeout(() => {
      setLoading(false);
    },4000)

  }, []);

  return (
    <div >
      {
        loading ? 
        <div style={{minHeight:"100vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
          <HashLoader color="#36d7b7" loading={loading} size={150}/>
        </div>
          :
      <BrowserRouter>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/imprint" element={<Home />}></Route>
                <Route path="/privacy" element={<Home />}></Route>
              </Routes>
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
}
    </div>
  );

}
export default App;
