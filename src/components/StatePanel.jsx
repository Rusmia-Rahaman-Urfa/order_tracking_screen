import React from 'react';

export default function StatePanel({ scenario, onReportIssue }) {
  if (scenario === 'normal') return null;

  if (scenario === 'delayed') {
    return (
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6 text-amber-900 shadow-sm">
        <div className="flex items-start">
          <span className="text-xl mr-2">⚠️</span>
          <div>
            <h4 className="font-semibold text-sm">Delivery Delayed</h4>
            <p className="text-xs mt-1 text-amber-800">
              Your package is experiencing a slight delay due to weather routing. We are expediting transit to get it to you safely.
            </p>
            <button 
              onClick={onReportIssue}
              className="mt-2 text-xs font-semibold text-amber-900 underline hover:text-amber-700"
            >
              Request Delay Compensation / Help →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (scenario === 'deliveredMissing') {
    return (
      <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg mb-6 text-rose-900 shadow-sm">
        <div className="flex items-start">
          <span className="text-xl mr-2">📦</span>
          <div>
            <h4 className="font-semibold text-sm">Can't Find Your Package?</h4>
            <p className="text-xs mt-1 text-rose-800">
              Marked as delivered, but haven't received it? Please check around your porch/reception, or submit an instant report.
            </p>
            <button 
              onClick={onReportIssue}
              className="mt-3 bg-rose-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-rose-700 transition"
            >
              Report Missing Package
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (scenario === 'noTracking') {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6 text-blue-900 shadow-sm">
        <div className="flex items-start">
          <span className="text-xl mr-2">🕒</span>
          <div>
            <h4 className="font-semibold text-sm">Tracking Info Pending</h4>
            <p className="text-xs mt-1 text-blue-800">
              Your item is being packed in our facility. Carrier tracking details will activate within 24 hours of dispatch.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}