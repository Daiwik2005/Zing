"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b-3 border-black"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#fffb00] border-3 border-black flex items-center justify-center font-bold text-xl shadow-[2px_2px_0px_0px_#0a0a0a]">
              Z
            </div>
            <span className="font-bold text-xl tracking-tight">Zing</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-medium hover:text-[#ff6b35] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="font-medium hover:text-[#ff6b35] transition-colors">
              How it works
            </a>
            <a href="#templates" className="font-medium hover:text-[#ff6b35] transition-colors">
              Templates
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden md:block px-4 py-2 font-medium hover:text-[#ff6b35] transition-colors"
            >
              Sign in
            </Link>
            <Link href="/signup" className="nb-button nb-button-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(#0a0a0a 2px, transparent 2px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#fffb00] border-3 border-black rotate-12 opacity-80" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#ff6b9d] border-3 border-black -rotate-12 opacity-80" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#4dabf7] border-3 border-black rotate-45 opacity-80" />
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-[#69db7c] border-3 border-black -rotate-12 opacity-80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-3 border-black rounded-full mb-8 shadow-[4px_4px_0px_0px_#0a0a0a] animate-fade-in">
            <span className="w-2 h-2 bg-[#69db7c] rounded-full animate-pulse" />
            <span className="text-sm font-semibold">AI-Powered Resume Builder</span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Build Resumes That{" "}
            <span className="inline-block bg-[#fffb00] px-4 border-3 border-black rotate-1 shadow-[4px_4px_0px_0px_#0a0a0a]">
              Land
            </span>{" "}
            Interviews
          </h1>

          <p className="text-xl md:text-2xl text-[#737373] max-w-3xl mx-auto mb-12 leading-relaxed">
            Create professional, ATS-friendly resumes in minutes with AI-powered
            optimization. Stand out from the crowd and get hired faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="nb-button nb-button-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Create Resume Free
            </Link>
            <Link
              href="#how-it-works"
              className="nb-button nb-button-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              See How It Works
            </Link>
          </div>

          {/* Resume Preview Mockup */}
          <div className="mt-20 relative">
            <div className="inline-block bg-white border-3 border-black rounded-lg shadow-[8px_8px_0px_0px_#0a0a0a] p-4 animate-fade-in animation-delay-300">
              <div className="w-[600px] h-[400px] bg-white rounded relative overflow-hidden">
                {/* Resume mock content */}
                <div className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#0a0a0a] rounded" />
                    <div className="flex-1">
                      <div className="h-4 bg-[#e5e5e5] rounded w-48 mb-2" />
                      <div className="h-3 bg-[#e5e5e5] rounded w-32" />
                    </div>
                  </div>
                  <div className="h-2 bg-[#e5e5e5] rounded w-full mb-3" />
                  <div className="h-2 bg-[#e5e5e5] rounded w-3/4 mb-6" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-3 bg-[#0a0a0a] rounded w-20 mb-2" />
                      <div className="h-2 bg-[#e5e5e5] rounded w-full mb-1" />
                      <div className="h-2 bg-[#e5e5e5] rounded w-4/5 mb-1" />
                      <div className="h-2 bg-[#e5e5e5] rounded w-3/5" />
                    </div>
                    <div>
                      <div className="h-3 bg-[#0a0a0a] rounded w-24 mb-2" />
                      <div className="h-2 bg-[#e5e5e5] rounded w-full mb-1" />
                      <div className="h-2 bg-[#e5e5e5] rounded w-5/6 mb-1" />
                      <div className="h-2 bg-[#e5e5e5] rounded w-2/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="nb-badge mb-4">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Everything You Need to <span className="bg-[#ff6b9d] px-2">Stand Out</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "AI-Powered Writing",
                desc: "Generate professional summaries and bullet points optimized for your target role.",
                color: "#fffb00",
              },
              {
                icon: "📄",
                title: "ATS Optimization",
                desc: "Built-in scanner ensures your resume passes applicant tracking systems.",
                color: "#4dabf7",
              },
              {
                icon: "🎨",
                title: "Professional Templates",
                desc: "Choose from 20+ ATS-friendly templates designed by career experts.",
                color: "#ff6b9d",
              },
              {
                icon: "📱",
                title: "Live Preview",
                desc: "See changes in real-time with our split-screen editor.",
                color: "#69db7c",
              },
              {
                icon: "📤",
                title: "PDF Export",
                desc: "Download ready-to-submit PDFs with perfect formatting.",
                color: "#9775fa",
              },
              {
                icon: "🔍",
                title: "Job Match Score",
                desc: "Get AI-powered suggestions to match your resume to job descriptions.",
                color: "#ff6b35",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="nb-card p-6 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-2xl mb-4 border-3 border-black rounded-lg shadow-[2px_2px_0px_0px_#0a0a0a]"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[#737373]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="nb-badge mb-4">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Create in <span className="bg-[#4dabf7] px-2">3 Easy Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Enter Your Info",
                desc: "Upload your existing resume or fill in your details. Our AI will structure everything professionally.",
              },
              {
                step: "02",
                title: "AI Enhancement",
                desc: "Let our AI optimize your content for your target role. Get suggestions for improvements.",
              },
              {
                step: "03",
                title: "Export & Apply",
                desc: "Download your professionally formatted PDF and start applying to jobs with confidence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="nb-card p-8 h-full">
                  <span className="text-6xl font-bold text-[#e5e5e5] absolute top-4 right-6">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                  <p className="text-[#737373] relative z-10">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-[#e5e5e5]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="nb-badge mb-4">Templates</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Choose Your <span className="bg-[#9775fa] px-2">Style</span>
            </h2>
            <p className="text-xl text-[#737373] mt-4 max-w-2xl mx-auto">
              Professionally designed templates optimized for ATS systems and hiring managers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Modern Tech", color: "#4dabf7" },
              { name: "Minimal ATS", color: "#0a0a0a" },
              { name: "Corporate Pro", color: "#69db7c" },
              { name: "Student", color: "#ff6b9d" },
            ].map((template, i) => (
              <div
                key={i}
                className="nb-card p-4 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="aspect-[3/4] border-2 border-black rounded mb-4 group-hover:scale-[1.02] transition-transform"
                  style={{ backgroundColor: i === 1 ? template.color : "white" }}
                >
                  <div className="p-4 h-full flex flex-col">
                    <div
                      className={`h-3 rounded mb-2 ${i === 1 ? "bg-white/30" : "bg-[#0a0a0a]"}`}
                    />
                    <div
                      className={`h-2 rounded w-3/4 mb-4 ${i === 1 ? "bg-white/20" : "bg-[#e5e5e5]"}`}
                    />
                    <div className="flex gap-2 mb-3">
                      <div
                        className={`h-8 w-8 rounded-full ${i === 1 ? "bg-white/30" : "bg-[#0a0a0a]"}`}
                      />
                      <div className="flex-1">
                        <div
                          className={`h-2 rounded w-2/3 mb-1 ${i === 1 ? "bg-white/20" : "bg-[#e5e5e5]"}`}
                        />
                        <div
                          className={`h-1.5 rounded w-1/2 ${i === 1 ? "bg-white/10" : "bg-[#e5e5e5]"}`}
                        />
                      </div>
                    </div>
                    <div
                      className={`h-1.5 rounded w-full mb-1 ${i === 1 ? "bg-white/10" : "bg-[#e5e5e5]"}`}
                    />
                    <div
                      className={`h-1.5 rounded w-5/6 mb-1 ${i === 1 ? "bg-white/10" : "bg-[#e5e5e5]"}`}
                    />
                    <div
                      className={`h-1.5 rounded w-4/6 ${i === 1 ? "bg-white/10" : "bg-[#e5e5e5]"}`}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{template.name}</span>
                  <div
                    className="w-4 h-4 rounded-full border-2 border-black"
                    style={{ backgroundColor: template.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="nb-badge mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Loved by <span className="bg-[#69db7c] px-2">Job Seekers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Zing helped me land my dream job at a FAANG company. The AI suggestions made my resume stand out!",
                name: "Sarah Chen",
                role: "Software Engineer at Google",
              },
              {
                quote:
                  "Finally, a resume builder that actually works. The ATS optimization is a game changer.",
                name: "Michael Rodriguez",
                role: "Product Manager at Meta",
              },
              {
                quote:
                  "I went from 0 interviews to 5 in just two weeks. The templates are beautifully designed.",
                name: "Emily Watson",
                role: "Data Scientist at Netflix",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="nb-card p-6 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl text-[#e5e5e5] mb-4">&quot;</div>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0a0a0a] rounded-full" />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-[#737373]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 nb-gradient-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#0a0a0a]">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 text-[#0a0a0a]/80">
            Join thousands of job seekers who got hired with Zing
          </p>
          <Link
            href="/dashboard"
            className="inline-block nb-button text-xl px-10 py-5 bg-[#0a0a0a] text-white border-[#0a0a0a] hover:bg-[#333]"
          >
            Create Your Resume Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#fffb00] flex items-center justify-center font-bold text-xl text-black">
                  Z
                </div>
                <span className="font-bold text-xl">Zing</span>
              </div>
              <p className="text-[#a3a3a3]">
                AI-powered resume builder for the modern job seeker.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-[#a3a3a3]">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#templates" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-[#a3a3a3]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-[#a3a3a3]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] pt-8 text-center text-[#a3a3a3]">
            <p>© 2026 Zing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}