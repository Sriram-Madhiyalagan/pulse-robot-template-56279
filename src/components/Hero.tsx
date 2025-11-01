import React from "react";
import { Button } from "./ui/button";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pulse-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-pulse-500/10 border border-pulse-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-pulse-500 animate-pulse"></span>
            <span className="text-sm text-pulse-300 font-medium">AI That Knows Your Team</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Stop Explaining Context.
            </span>
            <br />
            <span className="bg-gradient-to-r from-pulse-400 via-pulse-500 to-purple-500 bg-clip-text text-transparent">
              Start Shipping Code.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Custom AI personas trained on your GitHub, Jira, and Slack. 
            <span className="text-pulse-400 font-semibold"> No more "how does this work?"</span> moments.
            <br />
            Just safer code, faster PRs, and zero rework.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-pulse-500 hover:bg-pulse-600 text-white shadow-lg hover:shadow-pulse-500/50 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('early-access')}
            >
              Join Early Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-pulse-500/50 text-pulse-400 hover:bg-pulse-500/10 transition-all duration-300"
              onClick={() => scrollToSection('problem')}
            >
              See the Problem
            </Button>
          </div>

          {/* Lottie Animation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent z-10 pointer-events-none"></div>
            <LottieAnimation 
              animationPath="/loop-header.lottie" 
              className="w-full h-auto opacity-90"
            />
          </div>

          {/* Trust Signal */}
          <div className="mt-12 text-gray-400 text-sm">
            <p className="mb-4">Empowering devs who vibe with AI but hate context switching</p>
            <div className="flex items-center justify-center gap-6 flex-wrap opacity-60">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                <span>Slack</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.34V2.84a.84.84 0 00-.84-.84h-9.63zm1.5 6.32h-1.78v1.7c0 2.4-1.97 4.34-4.34 4.34H2v9.8c0 .46.38.84.84.84h12.32c.47 0 .85-.38.85-.84V8.32z"/>
                </svg>
                <span>Jira</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pulse-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-pulse-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
