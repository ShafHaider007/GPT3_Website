import "./App.css";
import {Footer, Header, Possibility, WhatGPT3,Blog,Features} from "./containers";
import {CTA, Brand,Navbar} from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
