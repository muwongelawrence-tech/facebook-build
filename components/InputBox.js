import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

function InputBox() {

    const sendPost = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className = "bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className = "flex space-x-4  p-4 items-center ">
            <Image 
              className = "rounded-full"
              src = "/ml.jpg"
              width = {40}
              height = {40}
              layout = "fixed"
              alt = ""
            /> 
             <form className = "flex flex-1">
                  <input type = "text"
                  className = "rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none "
                   placeholder = {`What's on your mind Muwonge Lawrence`}
                   />
                   <button 
                   type = "submit"
                    hidden
                    onClick = {sendPost}
                   >
                      Submit
                   </button>
             </form>
            </div>

            <div className = "flex justify-evenly p-3 border-t">
                <div className = "InputIcon">
                  <VideoCameraIcon className = "h-7 text-red-500"/>
                  <p
                   className = "text-xs sm:text-sm xl:text-base"
                  >Live Video</p>
                </div>

                <div className = "InputIcon">
                   <EmojiHappyIcon className = "h-7 text-yellow-300"/>
                   <p
                   className = "text-xs sm:text-sm xl:text-base"
                   >Feeling/Activity</p>
                </div>

                <div className = "InputIcon">
                   <CameraIcon className = "h-7 text-green-400"/>
                  <p
                   className = "text-xs sm:text-sm xl:text-base"
                  >Photo/Video</p>
                </div>
            </div>
        </div>
    );
}

export default InputBox;
