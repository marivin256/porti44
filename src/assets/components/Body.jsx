import { NavLink } from 'react-router-dom';
import portimg from '/src/assets/components/portimg.png'

function Body(){
    
    return(
        <div className='bg-black'>
        <div className='flex flex-col lg:flex-row justify-between mb-4 '>
        <img src={portimg} alt="image" id='pica' className='float-right rounded-full mb-6 mt-3'/>

<div className="text-white mt-20 px-6 max-w-xl">
 <div className="  mx-auto max-w-8xl px-2 sm:p-6 lg:px-8"> 
 
           <div
            className="  md:items-stretch md:justify-start">
                
                <div className="md:ml-auto "></div> 
  <div className="text-yellow-600 font-bold">HELLO!</div><br />
<  div className="text-4xl font-extrabold text-white sm:text-4xl md:text-6xl">I'm <span className="text-yellow-600">Tomusange<br/>Marvin</span></div>
<div className="mb-10 m-2">Fullstack Web Developer</div>
<span><NavLink to="/hire" className="p-3  border border-yellow-600 hover:text-black hover:bg-yellow-600 rounded-full mr-3">HIRE ME</NavLink></span>
<span><NavLink to="works" className="p-3  border border-white hover:text-black hover:bg-white rounded-full">MY WORKS</NavLink></span>

    


</div>
</div> 



</div>

</div>
<div className='bg-black'>hei</div>
</div>
    )
}
export default Body;