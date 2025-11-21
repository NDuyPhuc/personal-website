import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark text-white">
      <div className="text-center">
        <div className="font-display font-bold text-6xl tracking-tighter animate-pulse">
          NEXUS
        </div>
        <div className="w-48 h-1 bg-brand-gray mt-4 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-brand-cyan loader-bar shadow-[0_0_10px_#66FCF1]"></div>
        </div>
        <p className="mt-4 font-mono text-brand-cyan text-sm animate-pulse-fast">
          INITIALIZING SYSTEM...
        </p>
      </div>
    </div>
  );
};