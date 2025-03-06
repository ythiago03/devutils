import { NavLink, Outlet } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

import {
	ALargeSmall,
	FileJson,
	SmilePlus,
	User,
	RectangleEllipsis,
	Equal,
	GitGraph,
} from "lucide-react";

import "./Layout.scss";

const Layout: React.FC = () => {
	return (
		<section className="home_container">
			<nav className="sidebar_container">
				<ul>
					<h4>Generators</h4>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>
							<User />
							Person
						</li>
					</NavLink>

					<NavLink
						to="password"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>
							<RectangleEllipsis />
							Password
						</li>
					</NavLink>
				</ul>
				<span className="divider" />
				<ul>
					<h4>Text</h4>
					<NavLink
						to="text-transform"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>
							<ALargeSmall />
							Transform
						</li>
					</NavLink>
					<NavLink
						to="string-to-hex"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>
							<Equal />
							String to Hex
						</li>
					</NavLink>
				</ul>
				<ul>
					<h4>Others</h4>
					<NavLink
						to="public-apis"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>
							<FileJson />
							Public APIs
						</li>
					</NavLink>
					<NavLink
						to="icons"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>
							<SmilePlus />
							Icons
						</li>
					</NavLink>
					<NavLink
						to="commit-icons"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>
							<GitGraph />
							Commit Icons
						</li>
					</NavLink>
				</ul>
			</nav>

			<main className="main_container">
				<Outlet />
				<Toaster />
			</main>
		</section>
	);
};

export default Layout;
