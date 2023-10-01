import Popup from "reactjs-popup";
import { AddDueDate } from "../add-due-date";
import { useState } from "react";
const contentStyle = { background: "#252423", color: "#fff", border: "none", padding: 0, width: '230px'};

export const TaskPeriod = () => {
  const week:string[] = ['вс', 'пн', "вт", "ср", "чт", "пт", "сб"];
  const date = new Date();
  const [period, setPeriod] = useState<string>('');
  console.log(period)
  return (
    <div>
      <Popup
        position="bottom center"
        trigger={
          <button type="button" className="outline-none">
            <AddDueDate />
          </button>
        }
        {...{ TaskPeriod, contentStyle }}
      >
          <div className='text-sm text-center font-bold select-none my-2'>Срок</div>
          <hr className="border-zinc-600" />
          <div>
            <div>
            <div className="flex items-center justify-start gap-3  pl-4 cursor-pointer hover:bg-[#30302f] py-2 mt-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M17 10C17 13.7296 14.0832 16.778 10.4062 16.9884C10.2229 17.349 10.0011 17.6867 9.7461 17.996C9.83041 17.9987 9.91505 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.0849 2.00132 10.1696 2.00395 10.2539C2.3133 9.99891 2.65099 9.77706 3.01159 9.5938C3.22197 5.91685 6.27035 3 10 3C13.866 3 17 6.13401 17 10Z" fill="white"></path><path d="M9.5 5C9.22386 5 9 5.22386 9 5.5V10.5C9 10.7761 9.22386 11 9.5 11H12.5C12.7761 11 13 10.7761 13 10.5C13 10.2239 12.7761 10 12.5 10H10V5.5C10 5.22386 9.77614 5 9.5 5Z" fill="white"></path><path   d="M5.5 19C7.98528 19 10 16.9853 10 14.5C10 12.0147 7.98528 10 5.5 10C3.01472 10 1 12.0147 1 14.5C1 16.9853 3.01472 19 5.5 19ZM3.14645 14.8536L5.14605 16.8532L5.14857 16.8557C5.19602 16.9026 5.25051 16.938 5.30861 16.9621C5.36669 16.9861 5.4303 16.9996 5.497 17L5.5 17L5.503 17C5.5697 16.9996 5.63331 16.9861 5.69139 16.9621C5.75036 16.9377 5.80561 16.9015 5.85355 16.8536L7.85355 14.8536C8.04882 14.6583 8.04882 14.3417 7.85355 14.1464C7.65829 13.9512 7.34171 13.9512 7.14645 14.1464L6 15.2929V12.5C6 12.2239 5.77614 12 5.5 12C5.22386 12 5 12.2239 5 12.5V15.2929L3.85355 14.1464C3.65829 13.9512 3.34171 13.9512 3.14645 14.1464C2.95118 14.3417 2.95118 14.6583 3.14645 14.8536Z" fill="white"></path></svg>

            <h3 className='text-sm flex justify-between w-[77%]'
            onClick={() => setPeriod(`${date.getUTCDay()+1}.${date.getUTCMonth()+1}.${date.getUTCFullYear()}`)}>
              <div>Сегодня</div>
              <div className="text-zinc-400">{week[date.getDay()]}</div>
            </h3>
          </div>

          <div className="flex items-center justify-start gap-3 pl-4 cursor-pointer hover:bg-[#30302f] py-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M17 10C17 13.7296 14.0832 16.778 10.4062 16.9884C10.2229 17.349 10.0011 17.6867 9.7461 17.996C9.83041 17.9987 9.91505 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.0849 2.00132 10.1696 2.00395 10.2539C2.3133 9.99891 2.65099 9.77706 3.01159 9.5938C3.22197 5.91685 6.27035 3 10 3C13.866 3 17 6.13401 17 10Z" fill="white"></path><path d="M9.5 5C9.22386 5 9 5.22386 9 5.5V10.5C9 10.7761 9.22386 11 9.5 11H12.5C12.7761 11 13 10.7761 13 10.5C13 10.2239 12.7761 10 12.5 10H10V5.5C10 5.22386 9.77614 5 9.5 5Z" fill="white"></path><path  d="M10 14.5C10 12.0147 7.98528 10 5.5 10C3.01472 10 1 12.0147 1 14.5C1 16.9853 3.01472 19 5.5 19C7.98528 19 10 16.9853 10 14.5ZM5.85355 16.8536L7.85316 14.854L7.85567 14.8514C7.90256 14.804 7.93802 14.7495 7.96206 14.6914C7.98615 14.6333 7.9996 14.5697 7.99999 14.503L8 14.5L7.99999 14.497C7.9996 14.4303 7.98615 14.3667 7.96206 14.3086C7.93766 14.2496 7.90149 14.1944 7.85355 14.1464L5.85355 12.1464C5.65829 11.9512 5.34171 11.9512 5.14645 12.1464C4.95118 12.3417 4.95118 12.6583 5.14645 12.8536L6.29289 14H3.5C3.22386 14 3 14.2239 3 14.5C3 14.7761 3.22386 15 3.5 15H6.29289L5.14645 16.1464C4.95118 16.3417 4.95118 16.6583 5.14645 16.8536C5.34171 17.0488 5.65829 17.0488 5.85355 16.8536Z" fill="white"></path></svg>
            <h3 className='text-sm flex justify-between w-[77%]'
            onClick={() => setPeriod(`${date.getUTCDay()+2}.${date.getUTCMonth()+1}.${date.getUTCFullYear()}`)}
            >
              <div>Завтра</div>
              <div className="text-zinc-400">{`${week[date.getDay()+1]}`}</div>
            </h3>
          </div>

          <div className="flex items-center justify-start gap-3 pl-4 cursor-pointer hover:bg-[#30302f] py-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M17 10C17 13.7296 14.0832 16.778 10.4062 16.9884C10.2229 17.349 10.0011 17.6867 9.7461 17.996C9.83041 17.9987 9.91505 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.0849 2.00132 10.1696 2.00395 10.2539C2.3133 9.99891 2.65099 9.77706 3.01159 9.5938C3.22197 5.91685 6.27035 3 10 3C13.866 3 17 6.13401 17 10Z" fill="white"></path><path d="M9.5 5C9.22386 5 9 5.22386 9 5.5V10.5C9 10.7761 9.22386 11 9.5 11H12.5C12.7761 11 13 10.7761 13 10.5C13 10.2239 12.7761 10 12.5 10H10V5.5C10 5.22386 9.77614 5 9.5 5Z" fill="white"></path><path d="M5.5 19C7.98528 19 10 16.9853 10 14.5C10 12.0147 7.98528 10 5.5 10C3.01472 10 1 12.0147 1 14.5C1 16.9853 3.01472 19 5.5 19ZM6.68198 16.6391L8.44975 14.8713C8.64501 14.6761 8.64501 14.3595 8.44975 14.1642L6.68198 12.3964C6.48672 12.2012 6.17014 12.2012 5.97487 12.3964C5.77961 12.5917 5.77961 12.9083 5.97487 13.1036L7.38909 14.5178L5.97487 15.932C5.77961 16.1272 5.77961 16.4438 5.97487 16.6391C6.17014 16.8343 6.48672 16.8343 6.68198 16.6391ZM4.56066 14.5178L3.14645 13.1036C2.95118 12.9083 2.95118 12.5917 3.14645 12.3964C3.34171 12.2012 3.65829 12.2012 3.85355 12.3964L5.62132 14.1642C5.81658 14.3595 5.81658 14.6761 5.62132 14.8713L3.85355 16.6391C3.65829 16.8343 3.34171 16.8343 3.14645 16.6391C2.95118 16.4438 2.95118 16.1272 3.14645 15.932L4.56066 14.5178Z" fill="white"></path></svg>
             <h3
             onClick={() => setPeriod(`${date.getUTCDay()+8}.${date.getUTCMonth()+1}.${date.getUTCFullYear()}`)}
             className='text-sm flex  justify-between w-[77%]'>
              <div>Следующая неделя</div>
              <div className="text-zinc-400">{`${week[date.getDay()]}`}</div>
            </h3>
          </div>
            </div>
          </div>
          

          {/* <hr className="border-zinc-700" />

          <div className="flex items-center justify-start gap-3 pl-4 cursor-pointer hover:bg-[#30302f] py-2 my-2">
            <svg  fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 014 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5zM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4zm9 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.5-6.5a.5.5 0 011 0V14h1a.5.5 0 010 1h-1.5a.5.5 0 01-.5-.5v-2z" fill="currentColor"></path></svg>
            <h3 className='text-sm'>Выбрать дату</h3>
            <input className="bg-black rounded-sm indent-[10px] outline-none" type="time"/>
          </div> */}
      </Popup>
    </div>
  );
};
