import Layout from './pages/Layout/Layout'
import Home from './pages/Home'
import Concluido from './pages/Concluido'
import Pendente from './pages/Pendente'
import NewTask from './pages/NewTask'
import { BrowserRouter, Routes, Route} from 'react-router-dom' 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Home/> }></Route>
            <Route path="/Concluido" element={ <Concluido/> }></Route>
            <Route path="/Pendente" element={ <Pendente/> }></Route>
            <Route path="/NewTask" element={ <NewTask/> }></Route>
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
