'use client';

import { useState } from 'react';
import { Home as HomeIcon, Check, Eye, EyeOff, UserPlus } from 'lucide-react';
import { Button, Card, Form, Input, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();
  
  
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value
    const image = e.target.image.value
    const email = e.target.email.value
    const password = e.target.password.value

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password
    })
     console.log(data, error);
    if (error) {
    toast.error(error.message || "Registration failed!");
    return;
  }

  if (data) {
    toast.success("Account created successfully!");
    router.push('/login');
  }
  };
  
  return (
    <main className="min-h-screen bg-[#FDFDFD] antialiased pb-20">
      {/* Breadcrumb  Navigation */}
      <div className="bg-stone-50 border-b border-stone-100 py-4 mb-8">
        <div className="max-w-300 mx-auto px-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400">
          <Link
            href="/"
            className="hover:text-amber-600 transition-colors flex items-center gap-1"
          >
            <HomeIcon size={14} />
          </Link>
          <span>/</span>
          <Link href="/login">
            <span className="hover:text-stone-600 cursor-default">Login</span>
          </Link>
          <span>/</span>
          <span className="text-amber-600">Register</span>
        </div>
      </div>

      <div className="max-w-300 mx-auto px-6 flex flex-col items-center">
        <Card className="w-full max-w-137 p-8 md:p-12 bg-white rounded-none border border-stone-100 shadow-sm space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-2xl font-light tracking-tight text-stone-900 font-serif">
              Create Your Account
            </h1>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto md:mx-0" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium pt-2">
              Join TileCraft for an exclusive experience
            </p>
          </div>

          <Form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={onSubmit}
          >
            {/* Name Field */}
            <TextField
              isRequired
              name="name"
              className="md:col-span-1"
              labelPlacement="outside"
              label={
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                  Full Name
                </span>
              }
            >
              <Input
                placeholder="John Doe"
                className="rounded-none border-stone-200"
              />
            </TextField>

            {/* Image URL Field */}
            <TextField
              isRequired
              name="image"
              className="md:col-span-1"
              labelPlacement="outside"
              label={
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                  Profile Image URL
                </span>
              }
            >
              <Input
                placeholder="https://image-link.com"
                className="rounded-none border-stone-200"
              />
            </TextField>

            {/* Email Field */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="md:col-span-2"
              labelPlacement="outside"
              label={
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                  Email Address
                </span>
              }
              validate={(value) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ? 'Invalid email address'
                  : null
              }
            >
              <Input
                placeholder="john@example.com"
                className="rounded-none border-stone-200"
              />
            </TextField>

            {/* Password Field with Toggle */}
            <div className="md:col-span-2 space-y-1">
              <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">
                Secure Password
              </span>
              <TextField isRequired name="password">
                <div className="relative flex items-center">
                  <Input
                    type={isVisible ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="rounded-none border-stone-200 w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-3 text-stone-400 hover:text-amber-600 focus:outline-none"
                  >
                    {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </TextField>
              <p className="text-[9px] text-stone-400 tracking-wider">
                Must be 8+ chars with 1 uppercase & 1 number
              </p>
            </div>

            {/* Submit & Reset Buttons */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-[#2D44B9] hover:bg-[#1A2E8B] text-white rounded-none py-6 transition-all shadow-md font-bold text-[11px] uppercase tracking-[0.3em]"
              >
                <UserPlus size={16} className="mr-2" />
                Create Account
              </Button>
              <Button
                type="reset"
                variant="bordered"
                className="border-stone-200 text-stone-500 rounded-none py-6 font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-stone-50"
              >
                Reset
              </Button>
            </div>
          </Form>

          <div className="pt-1 border-t border-stone-50 text-center">
            <p className="text-stone-400 text-xs font-medium">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline">
                LogIn
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
