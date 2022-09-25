import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styled from 'styled-components'
import Chapter1 from "./Chapter1_Layouts/index";
import { Chapter2 } from "./Chapter2_Containers/index";
import Chapter3 from "./Chapter3_Controlled_Uncontrolled/index";
import Chapter4 from "./Chapter4_High_Order_Components/index";
import Chapter5 from "./Chapter5_Custom_Hooks/index";
import Chapter6 from "./Chapter6/index";



const Ul = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
display:flex;
`;

const Li = styled.li`
padding:0 8px;
`;


const Home = () => {

  return <>
  <h1>React Design Patterns</h1>
  </>


}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Ul>
            <Li><NavLink style={{textDecoration:'none'}} to="/">Home</NavLink></Li>
            <Li><NavLink style={{textDecoration:'none'}} to="/chapter1">Chapter 1</NavLink></Li>
            <Li><NavLink style={{textDecoration:'none'}} to="/chapter2">Chapter 2</NavLink></Li>
            <Li><NavLink style={{textDecoration:'none'}} to="/chapter3">Chapter 3</NavLink></Li>
            <Li><NavLink style={{textDecoration:'none'}} to="/chapter4">Chapter 4</NavLink></Li>
            <Li><NavLink style={{textDecoration:'none'}} to="/chapter5">Chapter 5</NavLink></Li>
            <Li><NavLink style={{textDecoration:'none'}} to="/chapter6">Chapter 6</NavLink></Li>
          </Ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/chapter3" element={<Chapter3 />} />
          <Route path="/chapter4" element={<Chapter4 />} />
          <Route path="/chapter5" element={<Chapter5 />} />
          <Route path="/chapter6" element={<Chapter6 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
