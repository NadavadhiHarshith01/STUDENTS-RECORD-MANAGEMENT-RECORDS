import React,{useState} from "react";
import Login from "./Login";
import Compose from "./Compose";
import Insert from "./Insert";
import About from "./About";
import Contact from "./Contact";
import Update from "./Update";
import View from "./View";
import PageNotFound from "./PageNotFound"



import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user._id && user ? <Compose/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/Login" element={ <Login setLoginUser={setLoginUser}/>} />
          <Route path="/Insert" element={user._id && user ? <Insert/> : <Login setLoginUser={setLoginUser}/>}/>
          <Route path="/About" element={user._id && user ? <About/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/Contact" element={user._id && user ? <Contact/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/Update" element={user._id && user ? <Update/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/View" element={user._id && user ? <View/> : <Login setLoginUser={setLoginUser}/>} />

          <Route path="*" element={<PageNotFound/>} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
