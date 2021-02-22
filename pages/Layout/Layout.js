import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
    html {
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
   
  }
  body {
  display:flex;
  
 
    *{
      box-sizing:content-box;
    }
    border-style: double;
    border-width: 10px;
    border-color: #ffecb3;

  }
 
  // anything else you would like to include
}


`;
const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;
