import { useNavigate } from "react-router-dom"
import logo from '../../assets/images/logo.svg'
export const Profile = () => {
    const navigate = useNavigate();
    const exitUser = ():void => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <div className="w-[20%] h-[180px] bg-[#1A1A1A] absolute top-[49px] right-[0px]">
            <div className="flex justify-between">
                <img className='w-28 pl-[6px]' src="https://aadcdn.msftauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="" />
                <div className="relative cursor-pointer h-[60px] w-[80px] items-center flex justify-center hover:bg-[#2A2926] ease-in-ou">
                    <button onClick={exitUser} className="text-white text-[15px] hover:underline">Sign Out</button>
                </div>
            </div>

            <div>
                    <div className="flex gap-[30px] mt-2 pl-5">
                        <div className="w-[90px] h-[90px] items-center flex justify-center ease-in-out">
                            <img src={logo} className="bg-white w-[90px] h-[90px] rounded-[50%]" alt="" />
                        </div>

                        <div className="text-white">
                            <h3 className="text-xl font-bold cursor-default select-none">Nick Name</h3>
                            <h5 className="text-sm cursor-default select-none">EMAIL</h5>
                            <h5 className="text-sm text-[#78BAFD] cursor-pointer">My statistics</h5>
                            <h5 className="text-sm text-[#78BAFD] cursor-pointer">My profile</h5>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}