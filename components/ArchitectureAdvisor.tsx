
import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getArchitecturalAdvice } from '../services/geminiService';

const ArchitectureAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const advice = await getArchitecturalAdvice(input);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 max-w-4xl mx-auto my-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Sparkles className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Architecture Advisor</h3>
          <p className="text-slate-500 text-sm">Get an instant high-level technical strategy for your business goal.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative mb-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Example: I need to build a healthcare marketplace that handles 50,000 users and requires HIPAA compliance..."
          className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-700 placeholder:text-slate-400"
        />
        <button
          disabled={loading}
          type="submit"
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          Get Strategy
        </button>
      </form>

      {response && (
        <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-2 py-1 bg-blue-100 rounded">Waseem's Recommendation</span>
          </div>
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{response}</p>
          <div className="mt-4 text-sm text-slate-500">
            *This is an AI-generated preview. For a deep dive, let's connect on Upwork.
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchitectureAdvisor;
