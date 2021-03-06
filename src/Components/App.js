import React from 'react';
import {gql} from 'apollo-boost';
import styled ,{ThemeProvider} from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import AppRouter from './Router';
import { useQuery } from 'react-apollo-hooks';
import Footer from './Footer';


const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`
const App = () =>{

  const {data:{isLoggedIn}} = useQuery(QUERY);
  
  return(
    <ThemeProvider theme={Theme}>
    <Wrapper>
      <GlobalStyles />
      <AppRouter isLoggedIn={isLoggedIn} />
      <Footer />
    </Wrapper >
    </ThemeProvider>
  )
}
export default App;
