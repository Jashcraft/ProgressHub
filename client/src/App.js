
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import LandingPage from "./components/LandingPage";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Dashboard from "./components/Dashboard/Dashboard";
import CreateEvent from "./components/Events/CreateEvent";
import ContactPage from "./components/ContactPage/ContactPage";

import {} from 'react-media'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/create-event' element={<CreateEvent/>} />
        <Route path='/contact-us' element={<ContactPage/>} />
      </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
