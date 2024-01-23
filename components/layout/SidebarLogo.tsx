import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();
  return(
    <div className="flex items-center ">  {/* THIS DIV LINE SHOULD BE DELETED TO DELETE (: TWITTER :) */}
        
    <div 
      onClick={() => router.push('/')} 
      className="
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        transition  
      ">
      <BsTwitter size={28} color="white"/>
      
    </div>
    {/* I WROTE TWITTER HERE  */}
    <div className="flex items-center  hover:bg-blue-500 hover:bg-opacity-40
    rounded-full h-10 w-full p-4  bg-blue-900
    justify-center cursor-pointer transition  
    ">
      {/* bg-sky-500 */}
    <span className="ml-2  text-white font-bold">MY TWITTER</span>
      </div>
    {/* ITS DONE HERE */}

      </div>
  );
}

export default SidebarLogo;