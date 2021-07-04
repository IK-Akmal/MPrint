import './App.css';
import Layout from './HOC/Layout'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import AboutPrint from './pages/AboutPrint'
import PriceForPrinting from './pages/PriceForPrinting'
import OurEquipment from './pages/OurEquipment'
import Contacts from './pages/Contacts'

function App() {
  return (
   <Layout>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about-print" component={AboutPrint}/>
       <Route path="/price-for-printing" component={PriceForPrinting}/>
       <Route path="/our-equipment" component={OurEquipment}/>
       <Route path="/contacts" component={Contacts}/>
     </Switch>
   </Layout>
  );
}

export default App;
