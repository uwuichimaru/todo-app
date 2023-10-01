import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import {  useSelector } from "react-redux";
import { selectUser } from "../authSlice";
import { UserData, useLoginMutation } from "../../../app/services/auth";
import { isErrorWithMessage } from "../../../utils/is-error-with-message";

interface Inputs extends UserData {
  email: string,
  password: string,
}

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const [loginUser] = useLoginMutation();
  const [error, setError] = useState('');

  useEffect(() => {
    if(user) {
      navigate("/myday");
    }
  }, [user, navigate])

  const login = async (data:UserData) => {
    try{
      await loginUser(data).unwrap();
      navigate("/myday")
    }
    catch(err) {
      const maybeError = isErrorWithMessage(err)
      if(maybeError) {
        setError(err.data.message);
      }
      else {
        setError("Неизвестная ошибка");
      }
    }
  }
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs> = async data => { 
    login(data)
   };

  return (
    <div className="bg-gradient-to-r from-[#EBDEDA] via-[#DFE1E0] to-[#EBE9D9] h-[100vh] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="-translate-x-2/4 -translate-y-2/4 drop-shadow-lg absolute top-[50%] left-[50%]  flex flex-col gap-[25px] bg-white w-[440px] mx-auto p-[50px] pt-[60px] pb-[100px]"
      >
        <img className='w-32' src="https://aadcdn.msftauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg" alt="" />
        <h3 className="text-black text-[1.5rem] font-bold font-ultra">Sign in</h3>
        <input
          className="border-b-[1px] border-[gray] outline-0 h-[33px]"
          type="email"
          {...register("email")}
          placeholder="email"
        />
        <input
          autoComplete="password"
          className="border-b-[1px] border-[gray] outline-0 h-[33px]"
          type="password"
          {...register("password")}
          placeholder="password"
        />
        {error ? (
          <div className="text-red-400 text-[14.6px] text-center">
            {error}
          </div>
        ) : ''}
        <p className="text-sm">No account? <Link className="text-[#0067B8]" to='/register'>Create one!</Link></p>
        <button className="bg-[#0067B8] text-white h-[33px]">
          Next
        </button>
      </form>
    </div>
  );
};

export default Login;
