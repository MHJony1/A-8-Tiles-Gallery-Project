'use client';

import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Card, Tooltip } from '@heroui/react';
import React from 'react';
import Image from 'next/image';
import { Mail, ShieldCheck, User } from 'lucide-react';

const MyProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="min-h-[80vh] bg-[#fafaf8] py-10 px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl text-[#1a1a1a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Personal Account
          </h1>
          <div className="h-px w-20 bg-[#b07d3a] mx-auto opacity-60" />
        </div>

        <Card className="border-none shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-white p-6 md:p-10 rounded-[2rem]">
          <div className="flex flex-col items-center">
            {/* Classy Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-tr from-[#b07d3a] to-[#e0d8cc] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                <Image
                  src={user?.image || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=fafaf8&color=b07d3a`}
                  alt="Profile"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* User Info */}
            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-2xl md:text-3xl font-medium text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {user?.name}
                </h2>
                <ShieldCheck size={20} className="text-[#b07d3a]" />
              </div>
              <p className="text-[#a89880] uppercase tracking-[0.2em] text-[11px] font-semibold">
                Verified Member
              </p>
            </div>

            <div className="w-full h-px bg-[#ede8e0] my-8 opacity-50" />

            {/* Details Grid with Tooltip */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              
              {/* Full Name Section */}
              <Tooltip content={user?.name} delay={0} closeDelay={0} placement="top">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fafaf8] border border-[#ede8e0]/50 cursor-help transition-all hover:bg-white hover:shadow-md">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#b07d3a] shrink-0">
                    <User size={20} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[10px] uppercase tracking-widest text-[#a89880]">Full Name</p>
                    <p className="font-medium text-[#1a1a1a] truncate">
                      {user?.name}
                    </p>
                  </div>
                </div>
              </Tooltip>

              {/* Email Section */}
              <Tooltip content={user?.email} delay={0} closeDelay={0} placement="top">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fafaf8] border border-[#ede8e0]/50 cursor-help transition-all hover:bg-white hover:shadow-md">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#b07d3a] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[10px] uppercase tracking-widest text-[#a89880]">Email Address</p>
                    <p className="font-medium text-[#1a1a1a] truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </Tooltip>

            </div>

            {/* Action Section */}
            <div className="w-full flex justify-center">
               <UpdateUserModal />
            </div>
          </div>
        </Card>

        <p className="mt-8 text-center text-[#a89880] text-xs tracking-widest uppercase opacity-60">
          Managed Securely via Tilecraft Gallery
        </p>
      </div>
    </div>
  );
};

export default MyProfilePage;