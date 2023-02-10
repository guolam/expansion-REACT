
// import { ActionButton } from "./components/ActionButton";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import Image from './img/janken.png';
import Image2 from './img/star.png';

const App = () => {
  return (
    <BrowserRouter>
      <h1>遊び場</h1>
      <ul>

{/* Linkをあらかじめいreact-router-domから入れる */}
        <li>
          <Link to="/omikuji"><img src={Image2} alt="Image" /></Link>
        </li>


        <li>
          <Link to="/janken"> <img src={Image} alt="Image" /></Link>
        </li>
      </ul>

      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/Janken" element={<Janken />} />
      </Routes>
    </BrowserRouter>

  );
};
export default App;