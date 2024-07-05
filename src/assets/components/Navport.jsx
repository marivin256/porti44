import { NavLink } from "react-router-dom";
import logo from '/src/assets/components/logo.jpg';
function Port (){
  const linkClass = ({isActive})=> isActive
  ?'border-b border-yellow-600 text-yellow-600 rounded-md px-3 py-2'
  :'text-white hover:border-b border-yellow-600 hover:text-yellow-600 rounded-md px-3 py-2'
    return(

<div className="bg-black sticky top-0 z-50">
 <nav className=" border-b border-yellow-500 ">
       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-">
         <div className="flex h-20 items-center justify-between ">
           <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
               <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto z-10 ml-2"
                src={logo}
                alt="Marvitech logo"
              />
              <h1 className="hidden md:block text-white text-4xl font-bold ml-2"
                >Marvi<span className="text-yellow-500">Tech</span></h1>
              
            </NavLink>
                <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}>
                  Home</NavLink>
                
                <NavLink
                  to="/about"
                  className={linkClass}>
                  About</NavLink>
                
                <NavLink
                  to="/services"
                  className={linkClass}>
                  Services</NavLink>
                
                <NavLink
                  to="/skills"
                  className={linkClass}>
                  Skills</NavLink>
                
                
               
              </div>
            </div>

           </div>
        </div>        
       </div>
   </nav>
</div>

    )
}
export default Port;