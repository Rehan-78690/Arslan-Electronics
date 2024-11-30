import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route} from 'react-router-dom';
import CustomNavbar from './Components/common/Navbar';
import MainPage from './pages/MainPage';
import TopBar from "./Components/common/TopBar";
import FloatingWhatsAppButton from "./Components/common/whatsappButton";
import AboutDetails from "./pages/AboutDetails";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import Aboutus from "./Components/MainPageComponents/Aboutus";
import Services from "./Components/MainPageComponents/Services";
import ProjectsPage from "./Components/MainPageComponents/Projects";
import ContactPage from "./Components/MainPageComponents/ConatactPage";
import Footer from "./Components/common/footer";

function App() {
  return (
           <>
              <FloatingWhatsAppButton/>
              {/*<TopBar/>*/}
      <CustomNavbar />
   
              <Routes>
                  <Route path='/' element={<MainPage/>}/>
                  <Route path='/about' element={<Aboutus/>}/>
                  <Route path='/services' element={<Services/>}/>
                  <Route path='/portfolio' element={<ProjectsPage/>}/>
                   <Route path='/contact' element={<ContactPage/>}/>
                  <Route path="/about-details/:id" element={<AboutDetails />} />
                   <Route path="/project-details/:id" element={<ProjectDetailsPage />} />
        </Routes>
    
              <Footer/>
           </>
  );
}

export default App;
