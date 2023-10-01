

export const Help = (helper) => {
    return (
        <div>
            <div className="w-[340px] h-[100vh] absolute top-[49px] right-0 bg-[#212121] cursor-default">
                <div className="flex justify-between pl-3 mt-3 items-center">
                    <h3 className="text-xl select-none font-bold font-ultra">Help</h3>
                    <div className="cursor-pointer hover:bg-[#555555] flex justify-center items-center w-[44px] h-[44px]" onClick={helper.funct}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <h3 className="text-blue-300 text-sm p-3 cursor-pointer">Get support</h3>
                </div>
                <div className="flex items-center p-3 gap-[10px]">
                    <button className="transition duration-[.3s] ease-in-out w-[57px] h-[33px] bg-blue-600 rounded-md hover:bg-blue-700">Sync</button>
                    <h3 className="text-white text-sm">Up do date</h3>
                </div>
            </div>
        </div>
        
    )
}