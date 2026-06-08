"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - SignIn Component */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-[#fffb00] border-3 border-black flex items-center justify-center font-bold text-xl shadow-[2px_2px_0px_0px_#0a0a0a]">
              Z
            </div>
            <span className="font-bold text-xl tracking-tight">Zing</span>
          </Link>

          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none border border-[#e5e5e5] rounded-lg",
                formButtonPrimary: "nb-button nb-button-primary",
                input: "nb-input",
                label: "text-sm font-semibold",
              },
            }}
            routing="hash"
            redirectUrl="/dashboard"
            signUpUrl="/signup"
          />
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-1 nb-gradient-bg items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <div className="inline-block bg-white border-3 border-black rounded-lg shadow-[8px_8px_0px_0px_#0a0a0a] p-2">
            <div className="w-80 h-48 bg-white rounded">
              <div className="p-4">
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#0a0a0a] rounded" />
                  <div className="flex-1">
                    <div className="h-3 bg-[#e5e5e5] rounded w-32 mb-1" />
                    <div className="h-2 bg-[#e5e5e5] rounded w-24" />
                  </div>
                </div>
                <div className="h-1.5 bg-[#e5e5e5] rounded w-full mb-2" />
                <div className="h-1.5 bg-[#e5e5e5] rounded w-4/5 mb-2" />
                <div className="h-1.5 bg-[#e5e5e5] rounded w-3/5" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-8 text-[#0a0a0a]">
            Build Resumes That Get Results
          </h3>
          <p className="text-[#0a0a0a]/70 mt-2">
            Join professionals who landed their dream jobs!
          </p>
        </div>
      </div>
    </div>
  );
}