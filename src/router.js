import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Home} from "./home";
import {Navigationcontainer} from "./navigationcontainer";
import {Pong} from "./togloom/pong/pong";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigationcontainer/>}>
          <Route path="" element={<Navigate to='home'/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/pong" element={<Pong/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

