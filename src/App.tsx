import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar/NavBar';
import { Accueil } from './Pages/Accueil/Accueil';
import { Apropos } from './Pages/Apropos/Apropos';
import { MesServices } from './Pages/MesServices/MesServices';
import { Oppotunites } from './Pages/Opportunites/Opportunites';
import { Blog } from './Pages/Blog/Blog';
import { Contacts } from './Pages/Contacts/Contacts';
import { Articles } from './Pages/ Articles/ Articles';
import { Publication } from './Components/Accueil/Publication';
import { PublicationDetails } from './Pages/PIblication/PublicationDetails';
import { ArticleFreeDetails } from './Components/Articles/ArticleFreeDetails';
import { PaymentTimeline } from './Components/Articles/PaymentTimeline';

function App() {
  return (
    <div className="bg-blue-50 dark:bg-gray-800">
     <NavBar/>
     <div className='flex-grow-1'>
     <Route>

 <Switch>
   <Route path='/' exact>
       <Redirect to='/accueil' />
   </Route>
   <Route path='/accueil'>
     <Accueil />

   </Route>
   <Route path='/apropos'>
     <Apropos />
     
   </Route>

   <Route path='/services'>
     <MesServices />
   </Route>

   <Route path='/opportunites'>
     <Oppotunites />
   </Route>
   

   <Route path='/blog'>
     <Blog />
   </Route>

   <Route path='/contact'>
     <Contacts />
   </Route>

   <Route path='/articles'>
     <Articles />
   </Route>
   

   <Route path='/publication'>
     <PublicationDetails selectedCategory={null} />
   </Route>
   <Route path='/articleFree'>
     <ArticleFreeDetails selectedCategory={null} />
   </Route>
   <Route path='/timeline'>
     <PaymentTimeline />
   </Route>
   

   </Switch>
     </Route>

   </div>
    </div>
  );
}

export default App;
