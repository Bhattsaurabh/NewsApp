import React, { useState } from 'react';
import Nav from "./components/nav";
import News from "./components/news";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  
  return (
    <>
      <Router>
      <Nav />

        <Routes>
         
          <Route exact path="/"              element={<News  key="general"  country="in"   category="general" />}/>  
          <Route exact path="/sports"        element={<News  key="sports"  country="in"   category="sports" />} />
          <Route exact path="/entertainment" element={<News  key="entertainment" country="in"    category="entertainment" />} />
          <Route exact path="/health"        element={<News  key="health"  country="in"   category="health" />}  />
          <Route exact path="/politics"      element={<News  key="politics" country="in"    category="politics" />} />
          <Route exact path="/weather"       element={<News  key="weather"  country="in"   category="weather" />} />
          <Route exact path="/education"     element={<News  key="education" country="in"    category="education" />} />


        </Routes>

      </Router> 

    </>
  );
}



export default App;
