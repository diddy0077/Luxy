import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        {/* Background Effects similar to Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8517B2]/20 via-purple-900/10 to-indigo-900/20 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-[32rem] h-[32rem] bg-gradient-to-r from-yellow-400/10 to-pink-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-[40rem] h-[40rem] bg-gradient-to-r from-purple-400/10 to-indigo-600/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gold-10 rounded-full flex items-center justify-center border border-gold-30 animate-pulse">
                <AlertTriangle className="w-12 h-12 text-gold" />
            </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold font-uni text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:scale-[1.02] active:scale-[0.98] py-4 rounded-lg px-8 text-base group"
        >
          <Home size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;