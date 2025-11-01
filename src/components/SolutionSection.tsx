import React from "react";
import { Brain, Users, Shield, Zap } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Personas Built From Your Team",
      description: "We analyze your GitHub commits, Jira decisions, and Slack convos to create AI agents that think like your senior devs.",
      visual: "Tech Lead Bot, Security Officer, Domain Expert",
    },
    {
      icon: Users,
      title: "Multi-Agent Context Engine",
      description: "Before suggesting code, our AI agents have a conversation—just like your team does. No more blind suggestions.",
      visual: "Agent debate → consensus → safe code",
    },
    {
      icon: Shield,
      title: "Org-Aligned by Default",
      description: "Every suggestion respects your patterns, security policies, and 'lessons learned the hard way.' Zero hallucinations about your codebase.",
      visual: "100% team-aligned output",
    },
    {
      icon: Zap,
      title: "Works With Your AI Tools",
      description: "Drop into Cursor, Copilot, or any AI coding assistant. Instant context layer—no workflow changes, no context switching.",
      visual: "One-click integration",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pulse-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="container relative z-10 px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-pulse-500/10 border border-pulse-500/20">
            <span className="w-2 h-2 rounded-full bg-pulse-500 animate-pulse"></span>
            <span className="text-sm text-pulse-300 font-medium">Synthetic Dev</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Meet Your</span>
            <br />
            <span className="bg-gradient-to-r from-pulse-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Collaborators
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Custom personas trained on <span className="text-pulse-400 font-semibold">your actual team.</span>
            <br />
            They debate. They align. They ship safe code.
          </p>
        </div>

        {/* How It Works Flow */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Step 1 */}
            <div className="flex-1 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-pulse-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sync Your Data</h3>
              <p className="text-gray-400 text-sm">GitHub, Jira, Slack</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-pulse-500 text-3xl">→</div>

            {/* Step 2 */}
            <div className="flex-1 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Learns</h3>
              <p className="text-gray-400 text-sm">Personas form</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-purple-500 text-3xl">→</div>

            {/* Step 3 */}
            <div className="flex-1 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agents Debate</h3>
              <p className="text-gray-400 text-sm">Multi-agent review</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-pink-500 text-3xl">→</div>

            {/* Step 4 */}
            <div className="flex-1 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl font-bold text-white">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Safe Code</h3>
              <p className="text-gray-400 text-sm">Aligned & merged</p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-pulse-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-pulse-500 to-purple-500 p-0.5">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-pulse-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pulse-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Visual indicator */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pulse-500/10 border border-pulse-500/20">
                  <span className="text-sm font-mono text-pulse-300">{feature.visual}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="max-w-4xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="bg-dark-900 border border-gray-700 rounded-2xl p-8 overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-500 font-mono">Agent Conversation</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-3">
                <span className="text-blue-400">Tech Lead:</span>
                <span className="text-gray-300">"This modifies the cache layer—check compatibility."</span>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400">Perf Engineer:</span>
                <span className="text-gray-300">"Good catch. We deprecate v1 cache in Q2 per last PR."</span>
              </div>
              <div className="flex gap-3">
                <span className="text-pink-400">Security:</span>
                <span className="text-gray-300">"Approved—follows our auth patterns from #security-review."</span>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <span className="text-green-400">→ Suggested Change:</span>
                <span className="text-gray-500 ml-2">[context-aligned code]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
