'use client';

import { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

type FormInput = {
  email: string;
  password: string;
};

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace('/');
      return;
    }
  }, [session, router]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/',
    });

    toast.success('You are logged in!');
  };

  return (
    <div className='h-screen grid place-content-center bg-slate-100'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white shadow-md rounded-xl p-8 max-w-lg'
      >
        <h2 className='text-3xl font-bold text-center'>Signin</h2>
        <input
          type='text'
          placeholder='Email Address'
          className='input input-primary w-full mt-8'
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        <p className='text-xs mt-1 text-rose-600 inline-block'>
          {errors.email?.type == 'required' && 'Field required!'}
          {errors.email?.type == 'pattern' && 'Invalid Email!'}
        </p>

        <input
          type='text'
          placeholder='Password'
          className='input input-primary w-full mt-4'
          {...register('password', { required: true, minLength: 3 })}
        />

        <p className='text-xs mt-1 text-rose-600 inline-block'>
          {errors.password?.type == 'required' && 'Field required!'}
          {errors.password?.type == 'minLength' && 'Password at least 3 char!'}
        </p>

        <button type='submit' className='btn btn-primary w-full mt-8'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Page;
