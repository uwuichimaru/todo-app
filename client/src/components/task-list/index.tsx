import {useForm, SubmitHandler} from 'react-hook-form'
import { TaskData, useGetAllTasksQuery, useUpdatedMutation } from "../../app/services/task";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { isErrorWithMessage } from '../../utils/is-error-with-message';


interface Inputs extends TaskData {
  taskId: string,
  type: string,
}


export const TaskList = () => {
  const { data, isLoading } = useGetAllTasksQuery();
  const {handleSubmit} = useForm<Inputs>();
  const [id, setId] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [update] = useUpdatedMutation();
  const [error, setError] = useState('');
  const updateTask = async(dataTask:TaskData) => {
    try{
      await update(dataTask).unwrap();
    }
    catch(err)
    {
      const maybeError = isErrorWithMessage(err);
      if(maybeError) {
        setError(err.data.message)
      }
    }
  }
  
  const onSubmit: SubmitHandler<Inputs> = data => {
    data.taskId = id;
    data.type = type;
    
    updateTask(data)
  }

  const handleTypeToggle = (type:string) => {
    setType(type == 'FAVORITE' ? 'TASK' : "FAVORITE")
  }

  if (isLoading) return <div>Loading...</div>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="w-[95%] flex flex-col gap-2 mt-3">
      <div>{error}</div>
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
  );
};
