import React from "react";
import FirstPage from '../Components/MainPageComponents/FirstPage';
import Aboutus from '../Components/MainPageComponents/Aboutus';
import Services from '../Components/MainPageComponents/Services';
import Team from '../Components/MainPageComponents/teamMembers';
import ProjectsPage from "../Components/MainPageComponents/Projects";
import ContactPage from "../Components/MainPageComponents/ConatactPage";
export default function MainPage(){
    return(
        <>
           <FirstPage/>
           <Aboutus/>
           <Services/>
           <Team/>
           <ProjectsPage/>
           <ContactPage/>
        </>
    );
}