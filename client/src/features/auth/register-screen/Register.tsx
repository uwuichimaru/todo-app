import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser } from "../authSlice";
import { UserData, useRegisterMutation } from "../../../app/services/auth";
import {useEffect} from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

export const Register = () => {

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [registerUser] = useRegisterMutation();

  useEffect(() => {
    if(user) {
      navigate('/login')
    }
  }, [user, navigate])

  
  const handleRegister = async (data:UserData) => {
    try{
      await registerUser(data).unwrap();
      navigate("/login")
    }
    catch(err) {
      console.log(err)
    }
  }

  const {register, handleSubmit} = useForm<UserData>();
  const onSubmit:SubmitHandler<UserData> = async data => {
    handleRegister(data)
  }

  return (
    <div className="bg-gradient-to-r from-[#EBDEDA] via-[#DFE1E0] to-[#EBE9D9] h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="drop-shadow-lg flex flex-col gap-[30px] bg-[#fff] shadow-md w-[400px] mx-auto p-[30px] pt-[20px] pb-[100px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h3 className="text-black text-center text-xl">Регистрация</h3>
        <input
          className="outline-0 indent-3 h-[33px] border-b-[1px] border-[#0067B8]"
          type="lastName"
           {...register("lastName")}
          placeholder="lastName"
        />
        <input
          className="outline-0 indent-3 h-[33px] border-b-[1px] border-[#0067B8]"
          type="firstName"
          {...register("firstName")}
          placeholder="firstName"
        />
        <input
          className="outline-0 indent-3 h-[33px] border-b-[1px] border-[#0067B8]"
          type="patronymic"
          {...register("patronymic")}
          placeholder="patronymic"
        />
        <input
          className="outline-0 indent-3 h-[33px] border-b-[1px] border-[#0067B8]"
          type="email"
          {...register("email")}
          placeholder="email"
        />
        <input
          autoComplete="password"
          className="outline-0 indent-3 h-[33px] border-b-[1px] border-[#0067B8]"
          type="password"
          {...register("password")}
          placeholder="password"
        />
        
          <div className="text-red-400 text-[14.6px] text-center">
            
          </div>
      
        <p className="text-sm">Already has account? <Link className="text-[#0067B8]" to='/login'>Sign In!</Link></p>
        <button className="bg-[#0067B8] text-[white] h-[33px]">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
