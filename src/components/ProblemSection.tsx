import React from "react";
import { AlertCircle, RefreshCw, GitPullRequest } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Lost in Context Hell",
      description: "New devs spend 40% of their time asking 'how does this work?' AI tools make it worse—generating code that violates your team's unspoken rules.",
      stat: "40% time wasted",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: RefreshCw,
      title: "Iteration Insanity",
      description: "Even perfect prompts need 20+ iterations. Your AI doesn't know your domain, your patterns, or why 'we tried that last year and it broke prod.'",
      stat: "20+ iterations average",
      color: "from-yellow-500 to-pulse-500"
    },
    {
      icon: GitPullRequest,
      title: "PR Rejection Roulette",
      description: "AI-generated code looks clean until your tech lead comments: 'This breaks our caching strategy' or 'We deprecated this pattern 3 sprints ago.'",
      stat: "60% rejected first try",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="problem" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249, 115, 22, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-500/10 border border-red-500/20">
            <span className="text-sm text-red-400 font-medium">The Vibe Coder's Nightmare</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">AI Coding Tools Are</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-pulse-500 bg-clip-text text-transparent">
              Making Things Worse
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            You got Copilot. You got Cursor. You're shipping faster... right? Wrong. 
            <span className="text-pulse-400 font-semibold"> You're debugging AI hallucinations.</span>
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-pulse-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} p-0.5`}>
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pulse-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {problem.description}
                </p>
                
                {/* Stat Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${problem.color} bg-opacity-10 border border-pulse-500/20`}>
                  <span className="text-sm font-bold text-white">{problem.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-300 font-display">
            Sound familiar? 
            <span className="text-pulse-500 font-bold"> There's a better way.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
