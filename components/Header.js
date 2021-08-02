
import  Image  from 'next/image';

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";


function Header() {

    return (
        <div className= "">
            {/* left */}
              <div className = "flex items-center">
                  <Image
                     src = "https://links.papareact.com/5me"
                    layout = "fixed"
                     height = {40}
                     width = {40}
                     alt = ""
                  />
                    
                  <div className = "flex ml-2 items-center rounded-full bg-gray-100 p-2">
                      <SearchIcon className = "h-6 text-gray-600" />
                      <input 
                      type="text" 
                      placeholder= "search facebook...."
                      className = "flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                       />
                  </div>
              </div>
            {/* center */}
               <div className = "">
                   <div className = "">

                   </div>
               </div>
            {/*  Right */}
            
        </div>
    );
}

export default Header;
