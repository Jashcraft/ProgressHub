
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
import ProfileEdit from "./components/Dashboard/Edit/ProfileEdit";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import MyEvents from "./components/Events/MyEvents";
import ContactPageWithHeader from "./components/ContactPage/ContactPageWithHeader";
import AllEventsWithHeader from "./components/Events/AllEventsWithHeader";


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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create-event' element={<CreateEvent />} />
            <Route path='/edit-profile' element={<ProfileEdit />} />
            <Route path='/contact-us' element={<ContactPageWithHeader />} />
            <Route path='/my-events' element={<MyEvents/>} />
            <Route path='/search-events' element={<AllEventsWithHeader/>} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </LocalizationProvider>
  );
}

export default App;
