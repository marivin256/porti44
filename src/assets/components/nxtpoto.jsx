import { NavLink } from 'react-router-dom';
import portimg from '/src/assets/components/portimg.png'

function Porto(){
    return(
        <div className='bg-black'>


<div className='flex flex-col lg:flex-row justify-between mb-4'>
    

<img src={portimg} alt="" id='pica' className='rounded-full'/>
<div className=' w-3/5'>
<div className="text-white mt-20 px-6 max-w-xl">
 <div className="  mx-auto max-w-8xl px-2 sm:p-6 lg:px-8"> 
 
           <div
            className="  md:items-stretch md:justify-start">
                <div className="md:ml-auto "></div> 

    <div className='text-3xl font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>About Me,</div>
    <div className='text-slate-500'>I'm a skilled Fullstack Developer with a Bachelors Degree in Software Engineering and go by the theme:<br/><span className='text-yellow-600'>"Work Hard in silence and let your succes make the noise"</span></div>
    <span className='font-bold'>Name:</span>
    <span>Tomusange Marvin</span><br /><br />
    <span className='font-bold'>Date of birth:</span>
    <span>16/04/2002</span><br /><br />
    <span className='font-bold'>Address:</span>
    <span>Gaba kansanga</span><br /><br />
    

<div className='text-3xl font-extrabold text-yellow-700 mb-6'>23 <span className='text-white'>Projects Complete</span></div>
<button className='p-3 mb-6 bg-yellow-600 rounded-full text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white'><NavLink to="/cv">DOWNLOAD CV</NavLink></button>
    </div>
    </div>
    </div>
</div>
        </div>
        <div className='bg-black h-20'>nicetime</div>
        </div>
    )
}
export default Porto;