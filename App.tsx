import React from "react";
import {
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  MessageSquare,
  ShieldCheck,
  Zap,
  LineChart,
  Repeat,
  Menu,
  X,
} from "lucide-react";
import { CASE_STUDIES, SERVICES, CAPABILITIES } from "./constants";
import SectionHeader from "./components/SectionHeader";
import ArchitectureAdvisor from "./components/ArchitectureAdvisor";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const UPWORK_LINK = "https://www.upwork.com/freelancers/~0183703f8641e47301";

  const navItems = [
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Why Me", href: "#whyme" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/waseemKhan.png"
                  alt="Waseem Afzal - Senior Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-bold text-xl tracking-tight text-slate-900">
                Waseem Afzal
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={UPWORK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Hire on Upwork
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-slate-600 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
            <a
              href={UPWORK_LINK}
              className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
            >
              Hire on Upwork
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 lg:pt-52 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm animate-fade-in">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Available for Senior Roles & Scale-ups
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Design. Build. <span className="gradient-text">Scale.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
                I help businesses launch faster and reduce technical risk with
                reliable, senior-architected web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={UPWORK_LINK}
                  target="_blank"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 group"
                >
                  Discuss Your Project
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-200 hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  View Case Studies
                </a>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-slate-900">
                    5+ Years
                  </div>
                  <div className="text-slate-500 text-sm">Experience</div>
                </div>
                <div className="text-center sm:text-left border-l border-slate-200 pl-8">
                  <div className="text-2xl font-bold text-slate-900">30+</div>
                  <div className="text-slate-500 text-sm">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -inset-10 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/waseemKhan.png"
                  alt="Waseem Afzal - Senior Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Approach */}
      <section id="approach" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="How I Help Your Business Succeed"
            subtitle="Building systems that solve your business challenges, streamline operations, and drive measurable growth."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase />,
                title: "Business Alignment",
                text: "Translating your unique requirements into scalable technical roadmaps.",
              },
              {
                icon: <ShieldCheck />,
                title: "Risk Mitigation",
                text: "Protecting your data and reputation with security-first architecture.",
              },
              {
                icon: <LineChart />,
                title: "Performance First",
                text: "Ensuring zero-latency experiences that keep your users engaged.",
              },
              {
                icon: <Repeat />,
                title: "Maintainability",
                text: "Clean, documented code that reduces long-term maintenance costs.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all shadow-lg cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advisor - Demonstrating Expertise */}
      <section className="py-12 bg-slate-50 px-4">
        <ArchitectureAdvisor />
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Architecture That Scales <br />
                <span className="text-blue-600">With Your Growth</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a senior developer, I focus on the "why" before the "how".
                Every architectural decision is evaluated against its impact on
                your bottom line and future scalability.
              </p>
              <div className="space-y-6">
                {CAPABILITIES.map((cap, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      {cap.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {cap.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cap.items.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full uppercase tracking-wider"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl cursor-pointer">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <div className="text-3xl font-bold">99.9%</div>
                  <p className="text-slate-400 text-sm mt-1">
                    Uptime SLA Design
                  </p>
                </div>
                <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl cursor-pointer">
                  <CheckCircle2 className="w-8 h-8 text-blue-200 mb-4" />
                  <div className="text-3xl font-bold">100+</div>
                  <p className="text-blue-100 text-sm mt-1">
                    Security Audits Passed
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xl cursor-pointer">
                  <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />
                  <div className="text-3xl font-bold text-slate-900">
                    Direct
                  </div>
                  <p className="text-slate-500 text-sm mt-1">
                    Stakeholder Comm
                  </p>
                </div>
                <div className="bg-slate-100 p-8 rounded-3xl shadow-inner cursor-pointer">
                  <div className="text-sm font-mono text-slate-500 mb-2">
                    // Scale-first Thinking
                  </div>
                  <div className="h-2 w-full bg-slate-300 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-3/4"></div>
                  </div>
                  <div className="text-xs text-slate-400 mt-2 text-right font-bold uppercase tracking-widest">
                    Optimized
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strategic Developer Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Focused on ROI and long-term stability for businesses and
              startups.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all flex flex-col h-full cursor-pointer"
              >
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={UPWORK_LINK}
                  className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 group"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Real-World Impact"
            subtitle="Case studies where technical excellence directly improved business metrics."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 transition-all shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
                      The Problem
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                      The Impact
                    </h4>
                    <p className="text-slate-800 font-semibold leading-relaxed">
                      {study.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Me */}
      <section id="whyme" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
            Senior-Level Ownership
          </h2>
          <div className="grid sm:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Reliable Delivery
              </h4>
              <p className="text-slate-600">
               Clear timelines, disciplined execution, and proactive communication ensure your project stays on track.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Clear Communication
              </h4>
              <p className="text-slate-600">
                Technical complexity is translated into clear business value, so every stakeholder understands the roadmap and its impact.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Clean Architecture
              </h4>
              <p className="text-slate-600">
                Codebases are built for seamless handovers—modular, testable, and aligned with industry best practices for long-term stability.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Proactive Problem Solving
              </h4>
              <p className="text-slate-600">
                Potential bottlenecks are identified early—before they impact users—while security, performance, and scaling needs are addressed proactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Build Something <br /> Exceptional?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how I can turn your vision into a scalable,
              high-performance reality. I'm currently accepting new projects via
              Upwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={UPWORK_LINK}
                target="_blank"
                className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
              >
                Start Your Project
                <ExternalLink className="w-6 h-6" />
              </a>
              <p className="text-sm font-semibold text-blue-200 uppercase tracking-widest">
                Trusted by 50+ Global Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="space-y-4 max-w-xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  W
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  Waseem Afzal
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Senior MERN Stack Developer helping businesses build and scale
                reliable web applications.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                  Navigation
                </h5>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                  Profiles
                </h5>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li>
                    <a
                      href={UPWORK_LINK}
                      className="hover:text-blue-600 transition-colors"
                    >
                      Upwork Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/waseem-afzal-b679b3240/"
                      className="hover:text-blue-600 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/waseemafzal9353"
                      className="hover:text-blue-600 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                  Contact
                </h5>
                <p className="text-sm text-slate-500 leading-loose">
                  Based in Punjab, Pakistan <br />
                  Working Globally <br />
                  <span className="font-bold text-blue-600">
                    Available via Upwork
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} Waseem Afzal. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
