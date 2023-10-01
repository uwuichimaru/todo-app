import { useState, useEffect } from "react";
import { Burger } from "../../components/burger-menu/index";
import { Sidebar } from "../../components/side-bar/index";
import { Header } from "../../components/header/index";
import { useNavigate } from "react-router";
import { ListName } from "../../components/list-name";
import important from "../../assets/images/importantBlue.svg";
import { TaskData, useImportantQuery } from "../../app/services/task";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdatedMutation } from "../../app/services/task";
import { isErrorWithMessage } from "../../utils/is-error-with-message";


interface Inputs extends TaskData {
  taskId: string,
  type: string
}

export const Important = () => {
  const {data, isLoading} = useImportantQuery();
  console.log(data)
  const [updated] = useUpdatedMutation();
  const [, setError] = useState<string>('');
  const [sidebar, setSidebar] = useState(false);
  const [type, setType] = useState<string>('');
  const [id, setId] = useState<string>('')
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  const updateTask = async (data:TaskData) => {
    try{
      await updated(data).unwrap();
    }
    catch(err){
      const maybeError = isErrorWithMessage(err);
      if(maybeError){
        setError(err.data.message)
      }
    }
  }


  const {handleSubmit} = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs> = (data) => {
    data.type = type;
    data.taskId = id;

    updateTask(data);
  }

  const handleTypeToggle = (type:string) => {
    setType(type === 'FAVORITE' ? 'TASK' : 'FAVORITE')
  }


  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <div className="flex bg-[#11100F] h-[100vh] overflow-y-hidden">
        <div>
          {token ? (
            <div>
                  <Burger toggler={toggleSidebar} />
                  {sidebar ? <Sidebar /> : ""}
            </div>
          ) : (
            ""
          )}
        </div>


            <div className="flex flex-col w-[100%]">
              <ListName image={important} text="Important" classes={"text-[#78BAFD]"} classa=""/>

              <form onSubmit={handleSubmit(onSubmit)}  className="w-[95%] flex flex-col gap-2 mt-3">
          {data?.map((task) => (
            <div key={task.id} onMouseEnter={() => {setId(task.id); handleTypeToggle(task.type)}} className="flex items-center justify-between p-3 text-white bg-[#252423] h-[48px] rounded-md cursor-pointer hover:bg-[#383635]">
              <div className="flex gap-3">
                <input type="radio" />
                <div>{task.description}</div>
              </div>
              <button type="submit">
                {task.type === 'FAVORITE' ?  
                
                <span data-is-focusable="true" role="checkbox" aria-checked="true" aria-label="Удаление отметки о важности."><svg fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z" fill="#78BAFD"></path></svg></span>
                : 
                <span data-is-focusable="true" role="checkbox" aria-checked="false" aria-label="Пометка задачи как важной."><svg  fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z" fill="#78BAFD"></path></svg></span> 
                }

              </button>
            </div>
          ))}
      </form>
            </div>



        
      </div>
    </div>
  );
};
