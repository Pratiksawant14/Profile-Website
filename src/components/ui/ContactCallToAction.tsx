import React from 'react';
import { Badge } from './Badge';
import { Mail, ArrowUpRight } from 'lucide-react';

export interface ContactCallToActionProps {
  email: string;
}

export const ContactCallToAction: React.FC<ContactCallToActionProps> = ({ email }) => {
  return (
    <div className="p-8 sm:p-10 md:p-12 rounded-2xl bg-surface-950 text-white border-2 border-accent/60 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 group">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/30 transition-all duration-500" />
      <div className="absolute inset-0 bg-grid-white/5 opacity-40 pointer-events-none" />

      <div className="space-y-4 max-w-2xl relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase tracking-wider">
          <Badge variant="accent" showDot className="py-1 px-3">
            DIRECT ENGAGEMENT INITIATION
          </Badge>
        </div>

        <h3 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
          Have an ambitious engineering challenge or architectural bottleneck?
        </h3>

        <p className="font-sans text-base sm:text-lg text-surface-200 leading-relaxed font-medium">
          Let's discuss how we can engineer a production-ready solution together. Whether you are scaling an enterprise AI platform or launching a foundational startup, I bring architectural clarity and execution rigor to every line of code.
        </p>
      </div>

      <div className="relative z-10 shrink-0 self-start md:self-center">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-sans font-bold text-base transition-all shadow-xl hover:shadow-accent/40 group/btn cursor-pointer"
        >
          <Mail className="w-5 h-5" />
          <span>Start a Conversation</span>
          <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};
