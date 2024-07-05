import Content from "./Components/content"
import Header from "./Components/header"

function App() {

  return (
    <div className='flex scroll-smooth flex-col min-h-screen gap-11 bg-neutral-900 px-20 text-gray-100'>
      <div>
        <div className="min-h-[50px]" />
        <Header />

      </div>
      <main>
        <section>
          <Content/>
        </section>
      </main>
    </div>
  )
}

export default App
