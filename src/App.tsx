import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import "./styles/main.scss";
import Person from "./pages/Person/Person";
import Password from "./pages/Password/Password";
import PublicApis from "./pages/Public-Apis/PublicApis";
import Icons from "./pages/Icons/Icons";
import TextTransform from "./pages/TextTransform/TextTransform";

import { ThemeProvider } from "./components/Theme/theme-provider";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Person />} />
						<Route path="password" element={<Password />} />
						<Route path="text-transform" element={<TextTransform />} />
						<Route path="public-apis" element={<PublicApis />} />
						<Route path="icons" element={<Icons />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
