type Toggle = {
  toggler: () => void
}
export const Burger = (toggle:Toggle) => {
  return (
    <div
      onClick={toggle.toggler}
      className={`z-10 relative top-[-29px] left-[30px] mt-5 mr-10 h-[20px] w-[20px] flex justify-center items-center hover:bg-[#292827]`}
    >
      <div className="space-y-[5px] cursor-pointer rounded shadow">
        <span className="block w-4 h-[0.5px] bg-gray-100 "></span>
        <span className="block w-4 h-[0.5px] bg-gray-100 "></span>
        <span className="block w-4 h-[0.5px] bg-gray-100 "></span>
      </div>
    </div>
  );
};
