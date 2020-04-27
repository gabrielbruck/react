import React from "react";
import "./App.css";
import Navigation from "./Day1/navigation";
import "./Day1/navigation.css";
import LandingPage from "./Day1/services";
import Banner from "./Day1/banner";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <LandingPage></LandingPage>
      <div className="banner-background">
        <Banner
          imageUrl={
            "https://cdn3.iconfinder.com/data/icons/flat-rounded-5/50/462-512.png"
          }
          title={"USER INTERFACE DESIGN"}
          text1={"Wireframing"}
          text2={"Prototyping"}
          text3={"Usabilty testing"}
        ></Banner>
        <Banner
          imageUrl={
            "https://library.kissclipart.com/20180902/yle/kissclipart-web-design-clipart-website-development-web-design-c9d0d857c2f9f0fe.png"
          }
          title={"CONCEPT AND IDEAS"}
          text1={"Conceptualization"}
          text2={"Digital Branding"}
          text3={"Product Strategy"}
        ></Banner>
        <Banner
          imageUrl={
            "https://cdn4.iconfinder.com/data/icons/seo-rounded-pack-vol-1/512/Blogging-512.png"
          }
          title={"DESIGN AND BRANDING"}
          text1={"Interaction Design"}
          text2={"Graphic Design"}
          text3={"Identity Design"}
        ></Banner>
      </div>
    </div>
  );
}

export default App;
