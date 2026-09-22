import React from 'react';

export default function DeliveryTimeline({ timeline }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 mb-6">
      <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">Progress Tracker</h3>
      <div className="relative pl-6 border-l-2 border-slate-200 space-y-6">
        {timeline.map((step, idx) => {
          const isDone = step.complete;
          const isErr = step.isError;

          return (
            <div key={idx} className="relative">
              <div 
                className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                  isErr 
                    ? 'border-rose-500 bg-rose-500 text-white' 
                    : isDone 
                      ? 'border-indigo-600 bg-indigo-600 text-white' 
                      : 'border-slate-300'
                }`}
              >
                {isDone && <span className="text-[10px]">✓</span>}
              </div>

              <div className="flex justify-between items-baseline">
                <p className={`text-xs font-semibold ${isDone ? 'text-slate-800' : 'text-slate-400'}`}>
                  {step.label}
                </p>
                <span className="text-[10px] text-slate-400">{step.detail}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}