import './App.css'

function App() {

  return (
    <>
      <header className="site-header">
        <nav aria-label="Navegación principal">
          <ul>
            <li>
                <a href="/" className="brand">
                    <img src="https://png.pngtree.com/png-vector/20250423/ourlarge/pngtree-travel-agency-logo-design-flying-plane-destination-logotype-vector-png-image_16084205.png"
                    alt="" className="logo" width="30" height="30"/>
                     <span>TravelHub</span>
                </a>
            </li>
            <li><a href="/">Explorar</a></li>
          </ul>
        </nav>
        <div className="hero" >
          <h1>Tu próximo viaje empieza aquí.</h1>
          <p>Descubre destinos y empieza a organizar tu próxima aventura.</p>
        </div>
      </header>
      <main>
        <div className="container">
          <h2>Destinos para inspirarte</h2>
          <p>Más adelante mostraremos aquí tarjetas con destinos obtenidos de una API.</p>
        </div>
        <div className="destinations">
          <article className="destination-card">
            <img src="destino-1.png" alt="Destino 1" className="image" />
            Destino 1
          </article>
          <article className="destination-card">
            <img src="destino-2.png" alt="Destino 2" className="image" />
            Destino 2
          </article>
        </div>
      </main>
    </>
  )
}

export default App
