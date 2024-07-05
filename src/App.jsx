
import {Route, createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';
  import Mainlayout from './Layouts/Mainlayout' 
  import Page1 from './Portpages/page1'
  import Page2 from './Portpages/page2'
  import Page3 from './Portpages/page3'
  import Page4 from './Portpages/page4'
  import Notfoundpage from './Pages/Notfoundpage'
  const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
  
  <Route index element={<Page1/>}/>
  <Route path='/about' element={<Page2/>}/>
  <Route path='/services' element={<Page3/>}/>
  <Route path='/skills' element={<Page4/>}/>
  <Route path='*' element={<Notfoundpage/>}/>
  
  </Route>
  
  )
  )
  
  function App (){
  return(
  <RouterProvider router={router}/>
  )
  }
  export default App;
  