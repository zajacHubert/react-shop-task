import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif; 
}

#root{
  max-width: 1500px;
  margin: 0 auto; 
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
