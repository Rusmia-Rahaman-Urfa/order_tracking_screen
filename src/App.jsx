import React, { useState } from 'react';
import { scenarios } from './data/mockOrder';
import StatePanel from './components/StatePanel';
import DeliveryTimeline from './components/DeliveryTimeline';
import ProductSummary from './components/ProductSummary';

export default function App() {
  const [activeScenarioKey, setActiveScenarioKey] = useState('normal');
  const [loading, setLoading] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const currentOrder = scenarios[activeScenarioKey];

  const handleScenarioChange = (key) => {
    setLoading(true);
    setActiveScenarioKey(key);
    setTimeout(() => setLoading(false), 200);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-start p-2 sm:p-4 font-sans text-slate-900">
      
      {/* Evaluator Selector Header */}
      <header className="w-full max-w-[430px] bg-slate-800 text-white rounded-t-xl p-3 text-xs mb-0 shadow-md">
        <p className="font-semibold text-slate-300 mb-1.5 uppercase text-[10px] tracking-wider">Order Tracking Screen</p>
        <div className="grid grid-cols-2 gap-1.5">
          <button 
            onClick={() => handleScenarioChange('normal')} 
            className={`px-2 py-1 rounded text-[11px] transition ${activeScenarioKey === 'normal' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-700 text-slate-300'}`}
          >
            Normal
          </button>
          <button 
            onClick={() => handleScenarioChange('delayed')} 
            className={`px-2 py-1 rounded text-[11px] transition ${activeScenarioKey === 'delayed' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-700 text-slate-300'}`}
          >
            Delayed
          </button>
          <button 
            onClick={() => handleScenarioChange('deliveredMissing')} 
            className={`px-2 py-1 rounded text-[11px] transition ${activeScenarioKey === 'deliveredMissing' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-700 text-slate-300'}`}
          >
            Missing Delivery
          </button>
          <button 
            onClick={() => handleScenarioChange('noTracking')} 
            className={`px-2 py-1 rounded text-[11px] transition ${activeScenarioKey === 'noTracking' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-700 text-slate-300'}`}
          >
            No Tracking Yet
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-[430px] bg-slate-50 border border-slate-200 rounded-b-xl shadow-lg p-4 min-h-[640px]">
        {loading ? (
          <div className="h-64 flex flex-col items-center justify-center text-slate-400">
            <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-xs">Updating tracking details...</p>
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-between items-center">
              <div>
                <h1 className="text-base font-extrabold text-slate-800">Track Package</h1>
                <p className="text-[11px] text-slate-500">Carrier: {currentOrder.carrier}</p>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                currentOrder.status === 'delayed' ? 'bg-amber-100 text-amber-800' :
                currentOrder.status === 'delivered' ? 'bg-emerald-100 text-emerald-800' :
                'bg-indigo-100 text-indigo-800'
              }`}>
                {currentOrder.statusLabel}
              </span>
            </div>

            <div className="bg-indigo-600 text-white rounded-xl p-4 shadow-md mb-4">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-indigo-200">Estimated Delivery</span>
              <p className="text-sm font-bold mt-0.5">{currentOrder.eta}</p>
            </div>

            <StatePanel 
              scenario={currentOrder.scenario} 
              onReportIssue={() => setSupportModalOpen(true)} 
            />

            <DeliveryTimeline timeline={currentOrder.timeline} />

            <ProductSummary product={currentOrder.product} orderId={currentOrder.id} />

            <div className="flex gap-2">
              <button 
                onClick={() => setSupportModalOpen(true)}
                className="flex-1 bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg text-xs font-semibold hover:bg-slate-100 transition shadow-sm text-center"
              >
                💬 Contact Support
              </button>
              <button 
                onClick={() => alert(`Tracking link copied!`)}
                className="flex-1 bg-slate-800 text-white py-2.5 rounded-lg text-xs font-semibold hover:bg-slate-700 transition shadow-sm text-center"
              >
                🔗 Share Tracking
              </button>
            </div>
          </>
        )}
      </main>

      {/* Support Modal */}
      {supportModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-xs rounded-xl p-5 shadow-2xl">
            <h3 className="text-sm font-bold text-slate-800">Submit Support Request</h3>
            <p className="text-xs text-slate-500 mt-1">
              Select an issue regarding order <span className="font-mono">{currentOrder.id}</span>:
            </p>
            <select className="w-full text-xs border border-slate-200 rounded p-2 mt-3 bg-slate-50">
              <option>Package delayed beyond estimate</option>
              <option>Marked delivered but not received</option>
              <option>Tracking number not updating</option>
            </select>
            <textarea 
              placeholder="Describe your issue..." 
              className="w-full text-xs border border-slate-200 rounded p-2 mt-2 h-20 bg-slate-50"
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <button 
                onClick={() => setSupportModalOpen(false)} 
                className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert('Support request logged successfully.');
                  setSupportModalOpen(false);
                }} 
                className="px-3 py-1.5 text-xs bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}