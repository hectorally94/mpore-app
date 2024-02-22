import { Switch, Route, Redirect } from 'react-router-dom';
import { AdminDashboard } from '../Components/Admin/Dashbord/AdminDashboard';
import { ArticleFreeDetails } from '../Components/Articles/ArticleFreeDetails';
import { PaymentTimeline } from '../Components/Articles/PaymentTimeline';
import { Articles } from '../Pages/ Articles/ Articles';
import { Accueil } from '../Pages/Accueil/Accueil';
import { Apropos } from '../Pages/Apropos/Apropos';
import { Blog } from '../Pages/Blog/Blog';
import { Contacts } from '../Pages/Contacts/Contacts';
import { MesServices } from '../Pages/MesServices/MesServices';
import { Oppotunites } from '../Pages/Opportunites/Opportunites';
import { PublicationDetails } from '../Pages/PIblication/PublicationDetails';

export const  Myrouter=()=> {
  return (
    <div className="bg-blue-50 dark:bg-gray-800">
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
   {/* Admin routes */}
   <Route path='/admin' >
            <AdminDashboard />
          </Route>

   </Switch>
     </Route>

   </div>
    </div>
  );
}
