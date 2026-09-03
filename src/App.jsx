import React, { useState, useEffect } from "react";
import {
  Mail,
  ExternalLink,
  Database,
  Layout,
  Server,
  Cpu,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setParallaxY(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-blue-500/30">
      {/*NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-800"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <span className="text-white tracking-widest uppercase italic">
              Suraj<span className="text-blue-500"> Negi</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
          </div>
          <a
            href="mailto:surajnegi502sn@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION WITH PARALLAX BACKGROUND */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <img
            src="/port.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-60 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-transparent to-[#020617]/60"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[130px] animate-pulse"></div>
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[130px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white-500/30 bg-blue-500/10 text-white text-s font-bold uppercase tracking-[0.2em]">
            Full Stack Developer
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white">
            SURAJ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400">
              NEGI
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building secure, scalable, and high-performance web applications
            with the <span className="text-white font-bold">MERN Stack</span>{" "}
            and <span className="text-white font-bold">Next.js</span>.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <a
              href="#projects"
              className="group bg-white text-slate-950 px-10 py-4 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-white/5"
            >
              Explore Projects
            </a>

            <div className="flex gap-2 p-1.5 bg-white/90 backdrop-blur rounded-2xl border border-slate-700/50">
              <a
                href="https://github.com/surajnegi12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-slate-100 rounded-xl transition-all flex items-center justify-center"
              >
                <FaGithub size={22} color="#171515" />
              </a>

              <a
                href="https://www.linkedin.com/in/suraj-negi-14b684248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-slate-100 rounded-xl transition-all flex items-center justify-center"
              >
                <FaLinkedin size={22} color="#0A66C2" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4 italic uppercase tracking-tighter">
          <span className="p-3 bg-blue-600/10 rounded-2xl border border-blue-600/20">
            <Layout className="text-blue-500" size={32} />
          </span>
          Professional Experience
        </h2>
        <div className="relative border-l-2 border-slate-800 ml-4 pl-10">
          <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[51px] top-1 border-4 border-[#020617] shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
          <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-[2.5rem] backdrop-blur-sm hover:border-blue-500/50 transition-all group">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Frontend Developer
                </h3>
                <p className="text-blue-400 font-bold text-lg mt-1">
                  VOSYN (Remote){" "}
                </p>
              </div>
              <span className="text-xs font-black bg-blue-600 text-white px-5 py-2 rounded-full uppercase tracking-widest">
                June 2025 - Present{" "}
              </span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-400 font-medium">
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                Developed modern Next.js & MaterialUI interfaces.
              </li>
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                Built interactive drag-and-drop dashboard features.
              </li>
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                Integrated frontend with secure backend REST APIs.
              </li>
              <li className="flex gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                Improved application stability by resolving high-priority bugs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*  TECHNICAL ARSENAL */}
      <section
        id="skills"
        className="py-32 bg-slate-950 px-6 border-y border-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
              Technical Arsenal
            </h2>
            <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">
              Skills & Technologies{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: <Cpu className="text-blue-400" />,
                skills:
                  "React.js, Next.js, Redux Toolkit, TypeScript, Tailwind, MUI ",
                bg: "from-blue-500/10",
              },
              {
                title: "Backend",
                icon: <Server className="text-emerald-400" />,
                skills: "Node.js, Express, REST APIs, Microservices, JWT Auth ",
                bg: "from-emerald-500/10",
              },
              {
                title: "Data & Cloud",
                icon: <Database className="text-purple-400" />,
                skills: "MongoDB, PostgreSQL, Prisma, Git, Postman ",
                bg: "from-purple-500/10",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className={`p-10 bg-gradient-to-br ${skill.bg} to-transparent border border-slate-800 rounded-[3rem] hover:border-slate-600 transition-all group`}
              >
                <div className="bg-slate-900 p-5 rounded-2xl w-fit mb-8 shadow-xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="font-black text-2xl mb-4 text-white uppercase italic tracking-tighter">
                  {skill.title}
                </h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {skill.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  FEATURED PROJECTS */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-16 uppercase italic tracking-tighter text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              name: "Course Selling App",
              desc: "A MERN stack platform for course management with secure JWT authentication.",
              tags: ["MongoDB", "React", "JWT"],
              image: "course.png",
              link: "https://coursesellingapp-frontend.onrender.com",
            },
            {
              name: "Paytm Clone App",
              desc: "Money transfer application with user authentication and transaction features.",
              tags: ["Node.js", "Tailwind", "REST API"],
              image: "transfer.jpg",
              link: "https://paytm-1-2e6x.onrender.com",
            },
            {
              name: "NoteAI",
              desc: "Summarize our notes using Google Gemini.",
              tags: ["Node.js","MongoDB","Google authentication"],
              image: "Noteai.png",
              link: "https://noteai-1-wgj8.onrender.com",
            },
          ].map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-slate-900/20 rounded-[3rem] border border-slate-800 overflow-hidden hover:border-blue-500/30 transition-all active:scale-95 shadow-2xl"
            >
              <div className="h-64 relative overflow-hidden bg-slate-900 flex items-center justify-center">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  </>
                ) : (
                  <div className="opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <ExternalLink size={40} className="text-blue-500" />
                  </div>
                )}
              </div>

              <div className="p-12 relative z-10 bg-slate-900/40 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <h3 className="font-black text-3xl mb-4 text-white uppercase italic tracking-tighter">
                    {project.name}
                  </h3>
                  <ExternalLink
                    size={20}
                    className="text-slate-600 group-hover:text-blue-400 transition-colors"
                  />
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-black bg-black text-blue-400 px-5 py-2.5 rounded-xl border border-slate-800 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/*  CONTACT & EDUCATION */}
      <footer className="py-32 bg-black px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[#020617] p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl"></div>
            <h4 className="text-3xl font-black mb-10 text-white italic uppercase tracking-tighter relative z-10">
              Education
            </h4>
            <div className="space-y-10 relative z-10">
              {[
                {
                  title: "MS in Computer Science",
                  school: "Liverpool John Moores University",
                },
                {
                  title: "Executive PG Program (Software Development)",
                  school: "IIIT Bangalore",
                },
                {
                  title: "B.Sc. in Maths",
                  school: "Kumaun University, Nainital",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="group border-l-2 border-slate-800 hover:border-blue-600 pl-6 transition-all duration-300"
                >
                  <p className="font-black text-white text-xl uppercase italic tracking-tighter group-hover:text-blue-400 transition-colors">
                    {edu.title}
                  </p>
                  <p className="text-slate-500 font-bold mt-1 uppercase text-xs tracking-widest">
                    {edu.school}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#020617] p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <h4 className="text-3xl font-black mb-10 text-white italic uppercase tracking-tighter relative z-10">
              Let's Connect
            </h4>
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-slate-900 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
                    Email
                  </p>
                  <p className="text-lg font-bold text-white break-all">
                    surajnegi502sn@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-slate-900 rounded-2xl text-blue-500 font-black text-xl px-5 transition-all">
                  HI
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
                    Languages
                  </p>
                  <p className="text-lg font-bold text-white">
                    English | Hindi
                  </p>
                </div>
              </div>
              <div className="pt-10 border-t border-slate-900/50">
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3">
                  Phone
                </p>
                <p className="text-xl font-black text-white tracking-tighter">
                  +91 9760768194
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-32 text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">
          &copy; 2026 Suraj Negi.
        </div>
      </footer>
    </div>
  );
};

export default App;
