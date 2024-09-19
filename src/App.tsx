import Home from "./pages/Home/Home";
import './styles/main.scss';
import { ThemeProvider } from "./components/Theme/theme-provider";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      <Home/>
    </ThemeProvider>
  )
}

export default App
