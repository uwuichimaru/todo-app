import { MouseEventHandler, useState } from "react";

type closeFun = {
  closeFunc: MouseEventHandler<HTMLDivElement> | undefined;
};

interface SwitcherState {
  switcher1: boolean;
  switcher2: boolean;
  swithcer3: boolean;
  swithcer4: boolean;
  swithcer5: boolean;
  swithcer6: boolean;
  swithcer7: boolean;
}

export const Settings = (settings: closeFun) => {
  const [switcher, setSwitcher] = useState<SwitcherState>({
    switcher1: false,
    switcher2: false,
    swithcer3: false,
    swithcer4: false,
    swithcer5: false,
    swithcer6: false,
    swithcer7: false,
  });

  const toggleSwitcherHandler = (key: keyof SwitcherState) => {
    const updateSwitchers: SwitcherState = { ...switcher };
    updateSwitchers[key] = !updateSwitchers[key];
    setSwitcher(updateSwitchers);
  };
  return (
    <div>
      <div className="w-[340px] h-[100vh] absolute top-[49px] right-0 bg-[#212121] cursor-default">
        <div className="flex items-center justify-between pl-3 mt-3">
          <h3 className="text-white text-xl font-bold font-ultra">Settings</h3>
          <div
            className="cursor-pointer hover:bg-[#555555] flex justify-center items-center w-[44px] h-[44px]"
            onClick={settings.closeFunc}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>

        <div>
          <h3 className="text-lg p-3">General</h3>
        </div>
        <div>
          {Object.keys(switcher).map((key) => (
            <div className="flex flex-col p-3" key={key}>
              <h3 className="font-bold font-ultra">Confirm before deleting</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  className={`${switcher[key as keyof SwitcherState] ? 'after:bg-blue-600 bg-blue-200' : ''} mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100  after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1]  focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#1c1c1c] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-red-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)]`}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => toggleSwitcherHandler(key as keyof SwitcherState)}
                />

                <span className="ml-3 text-sm font-medium text-gray-200 dark:text-gray-300">
                  {switcher[key as keyof SwitcherState] ? "On" : "Off"}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
