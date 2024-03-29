import { createGlobalStyle } from "styled-components";
import {normalize} from 'styled-normalize'

import styled from "styled-components";

import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    width: 95%;
    height: 95%;
    border-radius: 20px;
`;

export const GlobalStyle = createGlobalStyle`
${normalize}
html{
    html {
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
   
  }
  body {
    border-style: double;
    border-width: 10px;
    border-color: #9e9e9e;
    background-color:#EDF2F7;
    height:100%;
   
    overflow-y:auto;
  
}
    
   
  
}
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Container className="card z-depth-3">
                <Logo />
                {children}
               
            </Container>
        </>
    );
};

export default Layout;
