"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Resume {
  id: string;
  title: string;
  template: string;
  updatedAt: string;
  status: "draft" | "complete";
}

const mockResumes: Resume[] = [
  {
    id: "1",
    title: "Software Engineer Resume",
    template: "Modern Tech",
    updatedAt: "2026-05-27",
    status: "complete",
  },
  {
    id: "2",
    title: "Product Manager Application",
    template: "Corporate Pro",
    updatedAt: "2026-05-25",
    status: "draft",
  },
  {
    id: "3",
    title: "Data Scientist",
    template: "Minimal ATS",
    updatedAt: "2026-05-20",
    status: "complete",
  },
];

const templates = [
  { id: "modern", name: "Modern Tech", color: "#4dabf7" },
  { id: "minimal", name: "Minimal ATS", color: "#0a0a0a" },
  { id: "corporate", name: "Corporate Pro", color: "#69db7c" },
  { id: "student", name: "Student", color: "#ff6b9d" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"recent" | "name">("recent");

  const filteredResumes = mockResumes
    .filter((r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "recent") {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen flex bg-[#f5f5f5]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r-3 border-black h-screen sticky top-0">
        <div className="p-6 border-b-3 border-black">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#fffb00] border-3 border-black flex items-center justify-center font-bold text-xl shadow-[2px_2px_0px_0px_#0a0a0a]">
              Z
            </div>
            <span className="font-bold text-xl tracking-tight">Zing</span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 bg-[#fffb00] border-2 border-black rounded-lg font-semibold"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] border-2 border-transparent rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              My Resumes
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] border-2 border-transparent rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              Templates
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] border-2 border-transparent rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              AI Tools
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t-3 border-black">
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f5f5] border-2 border-transparent rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </Link>
          <div className="flex items-center gap-3 px-4 py-3 mt-2">
            <div className="w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center text-white font-bold">
              J
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">John Doe</p>
              <p className="text-xs text-[#737373]">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white border-b-3 border-black p-4 md:p-6 flex items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resumes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="nb-input w-full pl-12"
              />
              <svg
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="nb-button nb-button-secondary py-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <Link href="/resume/new" className="nb-button nb-button-primary">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Resume
            </Link>
          </div>
        </header>

        <div className="p-6 md:p-8">
          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Resumes", value: "12", color: "#fffb00" },
              { label: "This Month", value: "5", color: "#4dabf7" },
              { label: "Downloads", value: "28", color: "#69db7c" },
              { label: "AI Enhancements", value: "18", color: "#ff6b9d" },
            ].map((stat, i) => (
              <div
                key={i}
                className="nb-card p-4 flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-2xl border-2 border-black rounded-lg"
                  style={{ backgroundColor: stat.color }}
                >
                  {i === 0 && "📄"}
                  {i === 1 && "📅"}
                  {i === 2 && "📥"}
                  {i === 3 && "⚡"}
                </div>
                <div>
                  <p className="text-sm text-[#737373]">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Resumes */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Resumes</h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "name")}
                className="nb-input py-2 px-4"
              >
                <option value="recent">Most Recent</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResumes.map((resume) => (
                <Link
                  key={resume.id}
                  href={`/resume/${resume.id}`}
                  className="nb-card p-4 group"
                >
                  <div className="aspect-[3/4] bg-white border-2 border-black rounded mb-4 overflow-hidden">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex gap-2 mb-3">
                        <div className="h-6 w-6 bg-[#0a0a0a] rounded" />
                        <div className="flex-1">
                          <div className="h-2 bg-[#e5e5e5] rounded w-3/4 mb-1" />
                          <div className="h-1.5 bg-[#e5e5e5] rounded w-1/2" />
                        </div>
                      </div>
                      <div className="h-1 bg-[#e5e5e5] rounded w-full mb-1" />
                      <div className="h-1 bg-[#e5e5e5] rounded w-5/6 mb-1" />
                      <div className="h-1 bg-[#e5e5e5] rounded w-4/6" />
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-[#ff6b35] transition-colors">
                        {resume.title}
                      </h3>
                      <p className="text-sm text-[#737373]">
                        {resume.template} • {resume.updatedAt}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold border border-black rounded ${
                        resume.status === "complete"
                          ? "bg-[#69db7c]"
                          : "bg-[#fffb00]"
                      }`}
                    >
                      {resume.status}
                    </span>
                  </div>
                </Link>
              ))}

              {/* New Resume Card */}
              <Link
                href="/resume/new"
                className="nb-card p-4 border-dashed flex flex-col items-center justify-center min-h-[280px] group hover:border-solid"
              >
                <div className="w-16 h-16 bg-[#f5f5f5] border-2 border-black rounded-full flex items-center justify-center mb-4 group-hover:bg-[#fffb00] transition-colors">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <p className="font-semibold">Create New Resume</p>
                <p className="text-sm text-[#737373]">Start from scratch</p>
              </Link>
            </div>
          </div>

          {/* Templates Gallery */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Template Gallery</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {templates.map((template) => (
                <div key={template.id} className="nb-card p-3 group cursor-pointer">
                  <div
                    className="aspect-[3/4] border-2 border-black rounded mb-3 overflow-hidden"
                    style={{ backgroundColor: template.color === "#0a0a0a" ? template.color : "white" }}
                  >
                    <div className="p-3 h-full flex flex-col">
                      <div
                        className={`h-2 rounded mb-2 ${
                          template.color === "#0a0a0a" ? "bg-white/30" : "bg-[#0a0a0a]"
                        }`}
                      />
                      <div
                        className={`h-1.5 rounded w-3/4 mb-3 ${
                          template.color === "#0a0a0a" ? "bg-white/20" : "bg-[#e5e5e5]"
                        }`}
                      />
                      <div className="flex gap-2">
                        <div
                          className={`h-6 w-6 rounded-full ${
                            template.color === "#0a0a0a" ? "bg-white/30" : "bg-[#0a0a0a]"
                          }`}
                        />
                        <div className="flex-1">
                          <div
                            className={`h-1.5 rounded w-full mb-1 ${
                              template.color === "#0a0a0a" ? "bg-white/10" : "bg-[#e5e5e5]"
                            }`}
                          />
                          <div
                            className={`h-1 rounded w-2/3 ${
                              template.color === "#0a0a0a" ? "bg-white/10" : "bg-[#e5e5e5]"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{template.name}</span>
                    <button className="text-sm font-semibold text-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity">
                      Use →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}