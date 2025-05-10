import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Bienvenido a mi portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          ¡Bienvenido a mi portafolio!
        </h1>

        <p className="description">
          Aquí podrás ver algunos de mis proyectos y habilidades.
        </p>

        <div className="grid">
          <a href="https://github.com" className="card">
            <h3>Proyecto 1 &rarr;</h3>
            <p>Descripción breve del proyecto 1.</p>
          </a>

          <a href="https://github.com" className="card">
            <h3>Proyecto 2 &rarr;</h3>
            <p>Descripción breve del proyecto 2.</p>
          </a>
        </div>
      </main>

      <footer>
        <p>Hecho con ❤️ por [Tu Nombre]</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: sans-serif;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .title {
          font-size: 4rem;
          text-align: center;
        }
        .description {
          text-align: center;
          font-size: 1.5rem;
        }
        .grid {
          display: flex;
          gap: 2rem;
        }
        .card {
          padding: 1.5rem;
          text-align: center;
          background: #1e1e1e;
          color: white;
          border-radius: 12px;
          width: 200px;
        }
        footer {
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
