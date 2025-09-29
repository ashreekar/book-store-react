import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components/export.components.js"

function App() {

  return (
    <>
    {/* Added header and footer as commen for all routes but only
     changing other pages like Landing,BookDetails using outlet */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
