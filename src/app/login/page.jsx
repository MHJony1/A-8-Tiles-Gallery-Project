'use client';

import { useState } from 'react';
import { Home as HomeIcon, Check, Eye, EyeOff } from 'lucide-react';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  TextField,
} from '@heroui/react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

export default function LogInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signIn.email({
      email,
      password,
      callbackURL:"/"
    });

    if(error) {
      toast.error(error.message || "Login failed!");
      return;
    }
    if(data) {
      toast.success("Login successful!");
      router.push('/');
    }
  };

  const handleGoogleSignIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
      onSuccess: () => {
        toast.success("Google sign in successful!");
      },
    });
  } catch (error) {
    toast.error("Google sign in failed!");
  }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] antialiased">
      {/* Breadcrumb  Navigation */}
      <div className="bg-stone-50 border-b border-stone-100 py-4 mb-10">
        <div className="max-w-300 mx-auto px-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400">
          <Link
            href="/"
            className="hover:text-amber-600 transition-colors flex items-center gap-1"
          >
            <HomeIcon size={14} />
          </Link>
          <span>/</span>
          <Link href="/register">
            <span className="hover:text-stone-600 cursor-default">
              Register
            </span>
          </Link>
          <span>/</span>
          <span className="text-amber-600">Login</span>
        </div>
      </div>

      <div className="max-w-300 mx-auto px-6 flex flex-col items-center">
        <Card className="w-full max-w-120 p-8 md:p-12 bg-white rounded-none border border-stone-100 shadow-sm space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-light tracking-tight text-stone-900 font-serif">
              Account Login
            </h1>
            <div className="w-12 h-0.5 bg-amber-500" />
          </div>

          <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
            {/* Email Field */}
            <TextField
              isRequired
              name="email"
              type="email"
              variant="bordered"
              labelPlacement="outside"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return 'Please enter a valid email address';
                }

                return null;
              }}
              label={
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                  Email Address
                </span>
              }
            >
              <Input
                placeholder="Enter your email"
                className="rounded-none border-stone-200"
              />
            </TextField>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                  Password
                </span>
                <Link
                  href="#"
                  className="text-[10px] uppercase tracking-widest font-bold text-amber-600 hover:underline"
                >
                  Forgotten Password?
                </Link>
              </div>
              <TextField isRequired name="password">
                <div className="relative flex items-center">
                  <Input
                    type={isVisible ? 'text' : 'password'}
                    placeholder="Password"
                    className="rounded-none border-stone-200 w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-3 text-stone-400 hover:text-amber-600 transition-colors focus:outline-none"
                  >
                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#2D44B9] hover:bg-[#1A2E8B] text-white rounded-none py-6 transition-all shadow-md group"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase font-bold">
                Login
              </span>
            </Button>

            {/* Social Login */}
            <div className="space-y-6 pt-4">
              <div className="text-center">
                <p className="text-stone-400 text-xs font-medium">
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/register"
                    className="text-blue-600 hover:underline"
                  >
                    Register Now
                  </Link>
                </p>
              </div>

              <div className="relative flex items-center justify-center">
                <span className="bg-white px-4 text-stone-400 text-[11px] font-medium z-10">
                  Or, login with
                </span>
                <div className="absolute w-full border-t border-stone-100"></div>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center gap-3 px-8 py-3 border border-stone-200 hover:bg-stone-50 transition-all rounded-md shadow-sm group cursor-pointer"
                  onClick={handleGoogleSignIn}
                >
                  <FcGoogle size={22} />
                  <span className="text-sm font-semibold text-stone-600 group-hover:text-stone-900">
                    Google
                  </span>
                </button>
              </div>
            </div>
          </Form>
        </Card>
        <div className="mt-8 text-[10px] tracking-[0.4em] uppercase text-stone-300 font-medium">
          TileCraft Excellence
        </div>
      </div>
    </main>
  );
}
