import 'reactjs-popup/dist/index.css';
import { useState } from "react";
import { TaskRepeat } from "../task-repeat";
import { TaskNotification } from "../task-notification";
import { TaskPeriod } from "../task-period";
import { TaskData, useAddTaskMutation, useGetAllTasksQuery } from '../../app/services/task';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import { SubmitHandler, useForm } from 'react-hook-form';

export const AddTask = () => {
    const [, setTaskTitle] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [tasks] = useAddTaskMutation();
    const { data } = useGetAllTasksQuery();
    const [error, setError] = useState("");

    const handleTypeInput = (title:string) => {
        setTaskTitle(title);
        title != '' || title ? setDisabled(false) : setDisabled(true);
    }

    interface Inputs extends TaskData {
        description: string,
        ready: boolean,
        type: "TASK",
    }
    
    const addTask = async(dataTask:TaskData) => {
        try{
            await tasks({...dataTask, ready: false, type: "TASK"}).unwrap();
            console.log(data);
        }
        catch(err){
            const maybeError = isErrorWithMessage(err);
            if(maybeError){
                setError(err.data.message);
            }
            else setError("Неизвестная ошибка")
        }
    }

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit:SubmitHandler<Inputs> = async data => 
    { 
        console.log(data)
        addTask(data)
    };

    return (
        <form className="w-[95%]"
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex items-center gap-3 bg-[#252423] rounded-sm">
                <input type="radio" className="relative left-3 bg-[#252423] cursor-pointer" disabled />
                <input
                {...register("description")}
                onChange={e => handleTypeInput(e.target.value)}
                type="text" placeholder="Add a task" className="bg-[#252423] h-[49px] w-[100%] indent-2 rounded-sm outline-none text-white"/>
            </div>
            <div className="bg-[#201F1E] flex justify-between items-center pl-4 pr-4 h-[49px] rounded-sm">
                <div className="flex items-cetner gap-3">
                    <TaskPeriod />

                    <TaskNotification/>
                        
        
                    <TaskRepeat/>
                
                </div>
  
                <div>
                    <div>{error}</div>
                    <button type="submit" className={`text-[#A19F9D] border-y-[1px] border-x-[1px] px-2 border-zinc-600 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}  `}>Add</button>
                </div>
            </div>
        </form>
    )
}