import Layout from "./pages/Layout/Layout";
import './styles/main.scss';
import { ThemeProvider } from "./components/Theme/theme-provider";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Person from "./pages/Person/Person";
import Cpf from "./pages/Cpf/Cpf";
import PublicApis from "./pages/Public-Apis/PublicApis";
import Icons from "./pages/Icons/Icons";
import TextTransform from "./pages/TextTransform/TextTransform";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Person/>}/>
            <Route path="cpf" element={<Cpf/>}/>
            <Route path="text-transform" element={<TextTransform/>}/>
            <Route path="public-apis" element={<PublicApis/>}/>
            <Route path="icons" element={<Icons/>}/>
          </Route>
        </Routes>
      </Router>  
    </ThemeProvider>
  )
}

export default App
