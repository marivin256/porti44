import {Link} from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa';
function Notfoundpage(){
    return(
<section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className=' text-yellow-500 text-6xl mb-4'/>
      <h1 className="text-6xl text-white font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5 text-white">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-yellow-600 hover:bg-yellow-700 rounded-md px-3 py-2 mt-4"
        >Go Back</Link>
    </section>
    )
}
export default Notfoundpage;