import { useState } from "react";
import TodoImg from '../../assets/images/todo.png'
import { Profile } from "../profile";
import { Help } from "../help";
import { Settings } from "../settings";
import logo from '../../assets/images/logo.svg'

export const Header = () => {
    const token = localStorage.getItem('token');

    const [inputValue, setInputValue] = useState('');
    const [profile, setProfile] = useState(false);
    const [help, setHelp] = useState(false);
    const [settings, setSettings] = useState(false);




    const toggleProfileHandler = () => setProfile(!profile)
    const toggleHelpHandler = () => setHelp(!help);
    const toggleSettingsHandler = () => setSettings(!settings);
    return (
        <div>
            
            {token ? 
        <div className="flex justify-between items-center bg-[#1B1A19] border-b-[.5px] border-[gray] text-[white] w-[100%] h-[50px]">
            <div className="flex items-center gap-[30px] ml-[15px]">
                <div className="cursor-pointer w-[40px] h-[48px] items-center flex justify-center hover:bg-[#2A2926] ease-in-out">

            <img src={TodoImg}
                className="w-[15px]" alt="" />
                </div>

            <h3 className="font-bold cursor-pointer hover:underline">To Do</h3>
            </div>
            <div className="flex items-center">
            <svg className="rotate-90 relative left-[25px] text-[#78BAFD] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <div className="flex items-center">
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search" className="hover:bg-[#323130] placeholder:text-transparent placeholder:text-[11px] text-[11px] focus:placeholder:text-[#C2C2C2] cursor-pointer focus:cursor-text outline-none rounded-sm bg-[#252423] indent-8 w-[350px] h-[35px] active:"/>
                <button type="button" onClick={() => setInputValue('')} className={`relative right-[30px] ${inputValue == '' ? 'opacity-0 cursor-default' : ''}`}>
                <svg className="text-[#78BAFD]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                </button>
            </div>
            </div>
            <div className="flex items-center cursor-pointer">
                <div onClick={toggleSettingsHandler} className="w-[40px] h-[48px] items-center flex justify-center hover:bg-[#2A2926] ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                </div>
                {settings ? <Settings closeFunc={toggleSettingsHandler}/> : ""}

                <div onClick={toggleHelpHandler} className="w-[40px] h-[48px] items-center flex justify-center hover:bg-[#2A2926] ease-in-out">
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path  d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"/>
                    </svg>
                </div>
                    {help ? <Help funct={toggleHelpHandler}/> : ''}


                <div className="w-[40px] h-[48px] items-center flex justify-center hover:bg-[#2A2926] ease-in-out">
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
                    </svg>
                </div>


                <div onClick={toggleProfileHandler} className="w-[40px] h-[48px] items-center flex justify-center hover:bg-[#2A2926] ease-in-out">
                    <img src={logo} className="bg-white w-[30px] h-[30px] rounded-[50%]" alt="" />
                </div>
                {profile ? <Profile/> : ''}
            </div>
        </div> : ''
        }
        </div>
        
    )
}