import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Rocket, Sparkles } from "lucide-react";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  company: z.string().trim().max(100).optional(),
  teamSize: z.string().trim().max(50).optional(),
});

const EarlyAccessSection = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate input
      const validated = signupSchema.parse({
        email,
        company: company || undefined,
        teamSize: teamSize || undefined,
      });

      setIsLoading(true);

      const { error } = await supabase
        .from('early_access_signups')
        .insert([
          {
            email: validated.email,
            company: validated.company || null,
            team_size: validated.teamSize || null,
          }
        ]);

      if (error) throw error;

      toast({
        title: "🎉 You're on the list!",
        description: "We'll reach out soon with early access. Get ready to ship safer code.",
      });

      // Reset form
      setEmail("");
      setCompany("");
      setTeamSize("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Invalid input",
          description: error.errors[0].message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Oops!",
          description: "Something went wrong. Try again?",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="early-access" className="relative py-32 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pulse-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-pulse-500/10 border border-pulse-500/20">
              <Sparkles className="w-4 h-4 text-pulse-400" />
              <span className="text-sm text-pulse-300 font-medium">Limited Spots Available</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-white">Join the</span>
              <br />
              <span className="bg-gradient-to-r from-pulse-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Early Access Program
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get priority access, direct feedback from our team, and{" "}
              <span className="text-pulse-400 font-semibold">founding member pricing</span>.
              <br />
              Stop explaining context. Start shipping.
            </p>
          </div>

          {/* Form */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 sm:p-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-pulse-400">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-dark-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-pulse-500 focus:ring-pulse-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-dark-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-pulse-500 focus:ring-pulse-500"
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300 mb-2">
                  Team Size (Optional)
                </label>
                <select
                  id="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full bg-dark-900 border border-gray-700 text-white rounded-md px-4 py-2 focus:border-pulse-500 focus:ring-pulse-500 focus:outline-none"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 developers</option>
                  <option value="6-20">6-20 developers</option>
                  <option value="21-50">21-50 developers</option>
                  <option value="51+">51+ developers</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full text-lg px-8 py-6 bg-gradient-to-r from-pulse-500 to-purple-500 hover:from-pulse-600 hover:to-purple-600 text-white shadow-lg hover:shadow-pulse-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Joining...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Request Early Access
                  </span>
                )}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-10 pt-10 border-t border-gray-700">
              <p className="text-center text-sm text-gray-400 mb-6">What you get as an early member:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pulse-500/10 border border-pulse-500/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-sm text-gray-300">Priority onboarding</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <p className="text-sm text-gray-300">Direct team access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <p className="text-sm text-gray-300">Founder pricing lock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-gray-500 mt-8">
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
