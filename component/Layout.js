import Navbar from "./Navbar"
import Meta from "./Meta"
import Footer from "./Footer"


const Layout = ( {children}) => {
  return <>
    <Meta/>
    <Navbar/>
    
    <main>
        {children}
    </main>
    <Footer/>
  </>
}

export default Layout