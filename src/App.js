import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './styles.css';
import Post from "./components/Post";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1><span className="logo"></span>React Forum</h1>
        </Link>
        <ul>
          <li>
           <Link to="/"> Hem</Link>
          </li>
        </ul>
      </nav>
      <main className="main">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
