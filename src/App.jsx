import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Head/Header'
import Store from './catalogue/Store'
import Main from './mainpage/Main'
import Contacts from './contacts/Contacts'
import './Head/menu.css'
import Aboutus from './about/Aboutus'
import './style.css'
import Cart from './cart/Cart'
import Footer from './footer/Footer'
import Rule from './rulepage/Rule'

import  {UserProvider}  from './cart/User'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />

        <Route exact path="/">
          <Main />

        </Route>







        <Switch>

          <Route path="/main">
            <Main />

          </Route>


          <Route path="/about-page">
            <Aboutus />

          </Route>


          <Route path="/store">
            <Store />

          </Route>

          <Route path="/call">
            <Contacts />
          </Route>

          <Route path="/rule">
            <Rule />
          </Route>

         

        </Switch>

       
        <Footer />
        


      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
