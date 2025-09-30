import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components/export.components.js"
import { Provider } from "react-redux";
import appStore from "./stateUtil/bookAppStore.js";

function App() {

  return (
    <>
      {/* Added header and footer as commen for all routes but only
     changing other pages like Landing,BookDetails using outlet */}
      <Provider store={appStore}>
        {/* Created a app store with single slice of name book slice */}
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  )
}

export default App
