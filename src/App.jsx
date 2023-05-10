
function App() {

  return (
    <>
      <Header />
      <Landing />
    </>
  )
}

export default App


const Header = () => {
  return (
    <header className="bg-white py-6 px-16 rounded flex justify-between items-center">
      <h1 className="text-4xl font-thin text-black">
        Ada<span className="text-lime-400">gio</span>
      </h1>

      <nav className="flex">
        <ul className="flex space-x-4">
          <NavItem children={'AULAS'} />
          <NavItem children={'PILATES'} />
          <NavItem children={'FUNCIONAL'} />
          <NavItem children={'STUDIO'} />
        </ul>
      </nav>
      <h2 className="ml-6 text-lg font-mono text-gray-800">(11) 9310-6974</h2>
    </header>
  ) 
}

const NavItem = ({children}) => {
  return (
    <li className="text-gray-900 text-lg font-extralight hover:text-black hover:text-xl">{children}</li>
  )
}

const Landing = () => {
  return (
    <section className="rounded flex justify-between">
      <div className="py-20 px-40">
        <h1 className="font-semibold font-mono mb-4">PILATES FUNCIONAL E ACUPUNTURA</h1>
        <p className="font-mono mb-6">cronograma de educacao continuada, aulas presencias e online.</p>
        <button className="flex rounded-lg shadow-gray-900 bg-gradient-to-tr from-lime-100 text-center items-center to-cyan-100 px-6 py-2">
          <p className="mr-4 text-sm">PRIMEIRA AULA GRATUITA</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>

      </div>

      <div className="bg-lime-200 w-full rounded-bl-full">
        Teste
      </div>
    </section> 
  )
}
