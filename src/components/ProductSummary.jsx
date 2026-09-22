import React from 'react';

export default function ProductSummary({ product, orderId }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 mb-6">
      <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
        <span className="text-xs text-slate-400 font-medium">Order Reference</span>
        <span className="text-xs font-mono font-bold text-slate-700">{orderId}</span>
      </div>
      <div className="flex gap-3 items-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-16 h-16 rounded-lg object-cover bg-slate-50 border border-slate-100" 
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-slate-800 truncate">{product.name}</h4>
          <p className="text-[11px] text-slate-400 mt-0.5">{product.variant}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs font-semibold text-slate-700">{product.price}</span>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Qty: {product.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}