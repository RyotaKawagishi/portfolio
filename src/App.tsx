import './App.css'

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Portfolio</p>
        <h1 id="page-title">Taro Yamada</h1>
        <p className="lead">
          Frontend developer building simple, useful web experiences.
        </p>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>
          I create accessible interfaces with React, TypeScript, and practical
          design systems.
        </p>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>
          For project inquiries, contact me at{' '}
          <a href="mailto:taro@example.com">taro@example.com</a>.
        </p>
      </section>
    </main>
  )
}

export default App
