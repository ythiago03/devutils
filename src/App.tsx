import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./components/Theme/theme-provider";

import Layout from "./pages/Layout/Layout";
import Person from "./pages/Person/Person";
import Password from "./pages/Password/Password";
import PublicApis from "./pages/Public-Apis/PublicApis";
import Icons from "./pages/Icons/Icons";
import TextTransform from "./pages/TextTransform/TextTransform";
import StringToHex from "./pages/StringToHex/StringToHex";
import CommitIcons from "./pages/Commit Icons/CommitIcons";

import Navbar from "./components/Navbar/Navbar";

import "./styles/main.scss";

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
						<Route path="string-to-hex" element={<StringToHex />} />
						<Route path="public-apis" element={<PublicApis />} />
						<Route path="icons" element={<Icons />} />
						<Route path="commit-icons" element={<CommitIcons />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
