import React from 'react';
import {gql} from 'apollo-boost';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import AppRouter from './Router';
import { useQuery } from 'react-apollo-hooks';


const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const App = () =>{

  const {data:{isLoggedIn}} = useQuery(QUERY);
  
  return(
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
    </ThemeProvider>
  )
}
export default App;
