import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"
import './Layout.scss';

const Layout = () => {
  return (
    <section className="home_container">
      <nav className="sidebar_container">
        <ul>
          <h4>Generators</h4>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
              <li>
                <span className="material-symbols-outlined">user_attributes</span>
                Person
              </li>
            </NavLink>
          
            <NavLink to='cpf' className={({ isActive }) => (isActive ? 'active' : '')}>
              <li>
                <span className="material-symbols-outlined">id_card</span>
                Cpf
              </li>
            </NavLink>
        </ul>
        <span className='divider'></span>
        <ul>
          <h4>Text</h4>
          <li>
            <span className="material-symbols-outlined">text_fields</span>
            Transform
          </li>
        </ul>
        <ul>
          <h4>Others</h4>
          <NavLink to='public-apis' className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>
              <span className="material-symbols-outlined">integration_instructions</span>
              Public APIs
            </li>
          </NavLink>
          <li>
            <span className="material-symbols-outlined">mood</span>
            Icons
          </li>
          <li>
            <span className="material-symbols-outlined">image</span>
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