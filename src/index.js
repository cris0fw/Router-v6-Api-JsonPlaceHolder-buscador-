import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import Inicio from './routes/Inicio'
import Error404 from "./routes/Error404";
import Post from "./routes/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog/:id" element={<Post />} />

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
