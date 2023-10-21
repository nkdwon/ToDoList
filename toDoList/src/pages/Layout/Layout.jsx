import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer'
import Container from '../../components/Container_TaskApp/TaskApp'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  )
}

export default Layout