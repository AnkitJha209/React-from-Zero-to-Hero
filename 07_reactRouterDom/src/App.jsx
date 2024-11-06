import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <div className="h-screen bg-slate-800 flex flex-col items-center justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
