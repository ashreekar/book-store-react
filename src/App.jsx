import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components/export.components.js"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
