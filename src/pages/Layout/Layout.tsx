import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"
import './Layout.scss';
import { ALargeSmall, FileJson, IdCard, SmilePlus, User, Image } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <section className="home_container">
      <nav className="sidebar_container">
        <ul>
          <h4>Generators</h4>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
              <li>
                <User />
                Person
              </li>
            </NavLink>
          
            <NavLink to='cpf' className={({ isActive }) => (isActive ? 'active' : '')}>
              <li>
                <IdCard />
                Cpf
              </li>
            </NavLink>
        </ul>
        <span className='divider'></span>
        <ul>
          <h4>Text</h4>
          <NavLink to='text-transform' className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <ALargeSmall />
              Transform
            </li>
          </NavLink>
        </ul>
        <ul>
          <h4>Others</h4>
          <NavLink to='public-apis' className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <FileJson />
              Public APIs
            </li>
          </NavLink>
          <NavLink to='icons' className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <SmilePlus />
              Icons
            </li>
          </NavLink>
          <li>
            <Image />
            Free images
          </li>
        </ul>
      </nav>
      
      <main className="main_container">
        <Outlet/>
        <Toaster />
      </main>
    </section>
  )
}

export default Layout