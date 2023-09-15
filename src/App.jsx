import './App.css'
import Flowers from './components/Flowers/Flowers'
import Header from './components/Header/Header'
import Marks from './components/Marks/Marks'

function App() {

  return (
    <>
      <Header></Header>
     <div className='md:flex p-8 gap-2'>
     <Flowers></Flowers>
     <Marks></Marks>
     </div>
    </>
  )
}

export default App
