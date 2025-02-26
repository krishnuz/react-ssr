import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

const Heading = styled.h1`
  color: green;
  font-size: 32px;
`;

function App() {
  return (
    <div>
      <Heading>Server side rendering example</Heading>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
