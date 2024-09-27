import Logo from "../images/logo.png"
import Bg from "../images/bg.png"
import { Link } from "react-router-dom"
export default function SignUp(){
    return(
           <div
        className=" pb-10  z-10 p-10 overflow-hidden"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
         <img src={Logo} className="w-[300px] flex items-start justify-start">
         </img>
      <div className=" flex items-center justify-center flex-col ">
     
        <div className=" bg-[#0A0B0C] md:10 p-5 flex flex-col items-center justify-center rounded-md text-white gap-5 lg:w-[30%]">
         <h1 className="font-bold text-[30px]">Sign Up As</h1>
         <button className="w-[250px] bg-[#686666] p-2 rounded-sm">
            <Link to="/phot" >Photographer</Link>
         </button>
         <h2 className="">Or</h2>
         <button className="w-[250px] bg-[#686666] p-2 rounded-sm">
            <Link to= "/client">Client</Link>
         </button>
         <button
            className="bg-[#B60418] text-white h-[40px] w-[100px] "
            style={{ minHeight: "50px", lineHeight: "40px",minWidth:"100px" }}
          >
            Next
          </button>
          <p>Have an account ? Sign up now</p>
      </div>
      </div>
        </div>
    )
}