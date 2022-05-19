import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../Firebase.init';
import useTokens from '../../Hooks/useTokens';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, userEmail, loadingEmail, errorEmail] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [token] = useTokens(userEmail || userGoogle);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState('');
  const emailRef = useRef();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  if (loadingEmail || loadingGoogle || sending) { return <Loading /> }
  if (token) navigate(from, { replace: true });
  const onSubmit = data => signInWithEmailAndPassword(data.email, data.password);
  const passwordReset = () => {
    console.log(email);
  }


  const inputClass = `input w-full mt-2 border-2 border-gray-300`;
  return (
    <div className='w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/4 my-auto'>
      <div className="w-full p-5 rounded-2xl  shadow-2xl">
        <h3 className="font-bold text-lg text-center my-6">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email form */}
          <div className="form-control w-full">
            <label className="label text-sm font-semibold py-0 ml-2">
              <span className="label-text ">Email</span>
            </label>
            <input type="email" name='email' className={inputClass} onChange={(e)=>{setEmail(e.target.value)}
            }  {...register("email",
              {
                required: { value: true, message: 'Email is required' },
                pattern: { value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid email' }
              })} />
            <label className="label pt-1 ml-2">
              <span className="label-text-alt"></span>
              {(errors.email?.type === 'required' || errors.email?.type === 'pattern') && <span className="label-text-alt text-[12px] text-red-600">{errors.email.message}</span>}
            </label>
          </div>
          {/* password form */}
          <div className="form-control w-full">
            <label className="label text-sm font-semibold  py-0 ml-2">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' className={inputClass}  {...register("password",
              {
                required: { value: true, message: 'Password is required!' },
                minLength: { value: 6, message: 'Must contain 6 character or more!' }
              })} />
            <label className="label pt-1 ml-2">
              <span className="label-text-alt"></span>
              {(errors.password?.type === 'required' || errors.password?.type === 'minLength') && <span className="label-text-alt text-[12px] text-red-600">{errors.password.message}</span>}
            </label>
          </div>

          <input disabled={loadingEmail} type="submit" value='Login' className="btn modal-action w-full hover:text-white" />
          <p className='text-[12px] text-red-600 text-center font-semibold my-2'>{errorEmail && errorEmail?.message}</p>
        </form>
        <button onClick={passwordReset} className='text-[12px] font-semibold ml-2  hover:cursor-pointer hover:underline'>Forgot Password?</button>
        <Link to='/signup'>
          <h1 className='text-[14px] text-center font-semibold ml-2 my-2 hover:cursor-pointer hover:underline'>New to Doctors Portal? <span className='text-secondary'>Create new account</span></h1>
        </Link>

        <div className="divider px-4 text-base mt-4">OR</div>

        <button disabled={loadingGoogle} onClick={async () => { await signInWithGoogle() }} className="btn btn-outline p-0 w-full">CONTINUE WITH GOOGLE</button>
        <p className='text-[12px] text-red-600 text-center font-semibold my-2'>{errorGoogle && errorGoogle?.message}</p>
      </div>
    </div>
  );
};

export default Login;