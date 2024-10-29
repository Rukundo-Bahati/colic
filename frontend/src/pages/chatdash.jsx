// import { FaAudioDescription, FaMicrophone, FaVideo } from "react-icons/fa";
import Sidenav from "../components/sidenav";
import { FaSearch,FaBell,FaChevronDown } from "react-icons/fa";
import user1 from "../../public/user1.png"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const Chatdash = ({users}) => {


  return (
    <div className="bg-black w-full h-screen text-white overflow-hidden flex ">
                <Sidenav/>
      <div className="flex flex-col w-[100%]">
        <div className="flex justify-between mt-10 ">
          <h2 className="font-bold  ">Client Chat</h2>
         <div className="flex mr-10 gap-5">
        <FaSearch className=" h-[100%] hidden md:block"/>
        <FaBell className=" h-[100%] hidden md:block"/>
         <Link to={"/profile"} className="flex items-center gap-2">
          <img src={user1} alt="user profile" className="w-[50%]"/>
          <FaChevronDown/>
         </Link >
          </div>   
        </div>

     <div className="flex flex-col bg-soft_black w-[50%] max-h-[100%] overflow-y-auto container ">
      <div  className="rounded-full flex gap-4 items-center bg-[#333435] w-[80%] mx-auto p-1 mt-5">
        <FaSearch className="ml-4 sm:text-[50%] md:text-[70%] lg:text-[100%]"/>
        <input type="text" placeholder="Search for client" className="bg-[#333435] rounded-full outline-none placeholder-white  sm:text-[50%] md: text-[70%] w-[80%] lg:text-[100%]"/>
        </div>
        <button className="mt-10" >
         {users.map(user =>(
          <Link key={user.id} to={`/chat/${user.id}`}>
          <div className="flex hover:bg-[#333435] rounded-lg justify-between mb-10 items-center ml-4 ">
          <div className="flex gap-4 items-center ">
             <img src={user.image} alt={`${user.names} 's profile photo`}/>
             <p className="hidden sm:text-[50%] md:block text-[70%] lg:text-[100%] ">{user.names}</p>
          </div>
           <p className="mr-10 text-[#A3A3A3] hidden md:block text-[50%] lg:text-[80%]">20:30 PM</p>
          </div>
          </Link>
         ))}
        </button>
      
    

     </div>

        </div>          
    </div>
  )
}
Chatdash.propTypes={
users:PropTypes.array.isRequired
}

export default Chatdash;