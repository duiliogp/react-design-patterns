import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styled from 'styled-components'
import Chapter1 from "./Chapter1/index";
import { Chapter2 } from "./Chapter2/index";
import Chapter3 from "./Chapter3/index";



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
  <h1>Welcome to React Design Patterns</h1>
  <h3>1 - Layouts</h3>
  <p>StyledComponents, SplitLayout, Lists</p>
  <h3>2 - Container Components</h3>
  <p>Express Server</p>
  <h3>3 - Controlled and Uncontrolled Components</h3>
  <p></p>
  <h3>4 - Higher-Order Components</h3>
  <p></p>
  <h3>5 - Custom Hooks Patterns</h3>
  <p></p>
  <h3>6 - Functional Programming and React</h3>
  <p></p>
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
          </Ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/chapter3" element={<Chapter3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
