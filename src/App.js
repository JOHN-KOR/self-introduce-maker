import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Home from "./Home";
import Text from "./Text";
import Words from "./Words";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVM6ISsvaBsxYjsdMotD7uqGG69KrssKM",
  authDomain: "word-436f5.firebaseapp.com",
  projectId: "word-436f5",
  storageBucket: "word-436f5.appspot.com",
  messagingSenderId: "273956774923",
  appId: "1:273956774923:web:8d5ca3c85731c93433d30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
      <div>
    <ResponsiveAppBar/>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Text" element={<Text />} />
          <Route path="/Words" element={<Words />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
