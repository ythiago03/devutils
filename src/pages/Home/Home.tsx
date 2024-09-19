import './Home.scss';

const Home = () => {
  return (
    <section className="home_container">
      <nav className="sidebar_container">
        <ul>
          <h4>Generators</h4>
          <li>
            <span className="material-symbols-outlined">user_attributes</span>
            Person
          </li>
          <li>
            <span className="material-symbols-outlined">id_card</span>
            Cpf
          </li>
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
          <li>
            <span className="material-symbols-outlined">integration_instructions</span>
            Public APIs
          </li>
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
        <span>Tema teste</span>
      </main>
    </section>
  )
}

export default Home