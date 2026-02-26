"use client";

import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

export default function EMICalculator() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);
    const [emi, setEmi] = useState(0);

    const calculateEMI = () => {
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        const emiValue = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmi(Math.round(emiValue));
    };

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, interestRate, tenure]);

    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-accent/10">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">EMI Calculator</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-gray-600 font-semibold">Loan Amount (₹)</label>
                            <span className="text-primary font-bold">₹{loanAmount.toLocaleString()}</span>
                        </div>
                        <input
                            type="range"
                            min="1000000"
                            max="50000000"
                            step="100000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full accent-accent"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-gray-600 font-semibold">Interest Rate (%)</label>
                            <span className="text-primary font-bold">{interestRate}%</span>
                        </div>
                        <input
                            type="range"
                            min="7"
                            max="15"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full accent-accent"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-gray-600 font-semibold">Tenure (Years)</label>
                            <span className="text-primary font-bold">{tenure} Yrs</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="30"
                            step="1"
                            value={tenure}
                            onChange={(e) => setTenure(Number(e.target.value))}
                            className="w-full accent-accent"
                        />
                    </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Monthly EMI</p>
                    <h4 className="text-4xl font-bold text-primary mb-1">₹{emi.toLocaleString()}</h4>
                    <p className="text-accent font-semibold">*Estimated value</p>

                    <div className="mt-8 pt-8 border-t border-primary/10 w-full space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Interest</span>
                            <span className="text-primary font-bold">₹{(emi * tenure * 12 - loanAmount).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Payment</span>
                            <span className="text-primary font-bold">₹{(emi * tenure * 12).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn-primary w-full">Quick Pre-Approval</button>
        </div>
    );
}
