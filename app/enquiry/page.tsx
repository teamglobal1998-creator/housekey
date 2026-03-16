
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MapPin, Building2, Briefcase } from "lucide-react";

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [activeTab, setActiveTab] = useState("buy");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-green-600 w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-8">
            Your enquiry has been received. Our team will get back to you shortly.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary w-full"
          >
            Submit Another Response
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 md:pt-32 md:pb-20 px-2 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white shadow-xl rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-white p-6 md:p-8 border-b-4 md:border-b-8 border-accent relative">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">HouseKey Enquiry Form</h1>
            
            <div className="flex flex-col gap-8">
              {/* Type Selection Tabs */}
              <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl self-start">
                <button 
                  type="button"
                  onClick={() => setActiveTab("buy")}
                  className={`px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "buy" ? "bg-white text-primary shadow-lg scale-105" : "text-gray-500 hover:text-primary"}`}
                >
                  Buy
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveTab("rent")}
                  className={`px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "rent" ? "bg-white text-primary shadow-lg scale-105" : "text-gray-500 hover:text-primary"}`}
                >
                  Rent
                </button>
              </div>

              {/* Conditional Project Selection */}
              {activeTab === "buy" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3"
                >
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider">Select Project *</label>
                  <div className="relative group max-w-md">
                    <select required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent outline-none font-bold text-primary appearance-none cursor-pointer group-hover:bg-white transition-colors">
                      <option value="Swadesha">Swadesha (Moshi)</option>
                      <option value="Aurum Avenue">Aurum Avenue (Manchar)</option>
                      <option value="Adi Prime">Adi Prime (Moshi)</option>
                      <option value="Other">Other Project</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-8 md:space-y-10">
            {/* Section: Basic Information */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-lg md:text-xl font-bold text-primary border-l-4 border-accent pl-4">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      required
                      type="text"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      required
                      type="email"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      required
                      type="tel"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea 
                      required
                      rows={1}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="Home or work address"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Financials & Requirements */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-4">Financials & Requirements</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-4 text-primary uppercase tracking-wider">Annual Family Income *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {["< 12 Lakhs", "12 - 20 Lakhs", "20 - 35 Lakhs", "35 - 40 Lakhs", "40 Lakhs & Above"].map((option) => (
                      <label key={option} className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="radio" name="income" className="w-5 h-5 text-accent focus:ring-accent border-gray-300" required />
                        <span className="ml-3 text-gray-700 font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-4 text-primary uppercase tracking-wider">Looking for *</label>
                  <div className="flex flex-wrap gap-4">
                    {["1 BHK", "2 BHK", "3 BHK", "Other"].map((option) => (
                      <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="w-6 h-6 rounded border-gray-300 text-accent focus:ring-accent transition-all" />
                        <span className="text-gray-700 font-semibold group-hover:text-primary">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-4 text-primary uppercase tracking-wider">Budget Range *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {["25L - 30L", "30L - 35L", "35L - 40L", "40L - 50L", "50L & above"].map((option) => (
                      <label key={option} className="relative flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                        <input type="radio" name="budget" className="w-5 h-5 text-accent focus:ring-accent border-gray-300" required />
                        <span className="ml-3 text-gray-700 font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Additional Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-4">Additional Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Age *</label>
                  <div className="space-y-2">
                    {["< 25 Years", "25 - 30 Years", "30 - 35 Years", "35 - 40 Years", "40 - 60 Years", "60 Years & Above"].map((age) => (
                      <label key={age} className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" name="age" className="w-5 h-5 text-accent" />
                        <span className="text-gray-700">{age}</span>
                      </label>
                    ))}
                  </div>
                </div>

                  <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Occupation *</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Service", "Profession", "Business", "Retired", "Housewife"].map((occ) => (
                        <label key={occ} className="cursor-pointer">
                          <input type="radio" name="occupation" value={occ} className="sr-only peer" />
                          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 peer-checked:bg-accent peer-checked:text-white transition-all">
                            {occ}
                          </div>
                        </label>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                       <input type="radio" name="occupation" value="Other" className="w-4 h-4 text-accent" />
                       <span className="text-sm text-gray-600">Other:</span>
                       <input type="text" className="flex-1 border-b border-gray-300 focus:border-accent outline-none text-sm py-1" placeholder="Please specify" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input required type="text" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200" placeholder="e.g. Google" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Designation *</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input required type="text" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200" placeholder="e.g. Manager" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing & Staff */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-gray-100">
              <div>
                <label className="block text-sm font-bold text-primary mb-4">How did you find us? *</label>
                <div className="space-y-2">
                  {["Facebook", "Instagram", "Hoarding", "Pre-sales / Tele-marketing", "Property Portal", "News Paper", "Emailers", "Channel Partners"].map((source) => (
                    <label key={source} className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="source" className="w-4 h-4 text-accent" />
                      <span className="text-sm text-gray-600">{source}</span>
                    </label>
                  ))}
                  <div className="flex items-center gap-2">
                    <input type="radio" name="source" className="w-4 h-4 text-accent" />
                    <span className="text-sm text-gray-600">Other:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 focus:border-accent outline-none text-sm py-1" placeholder="Please specify" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-4">Attended By *</label>
                <div className="space-y-2">
                  {["Tanu", "Shubham", "Avinash"].map((staff) => (
                    <label key={staff} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-accent rounded" />
                      <span className="text-sm text-gray-600">{staff}</span>
                    </label>
                  ))}
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 text-accent rounded" />
                    <span className="text-sm text-gray-600">Other:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 focus:border-accent outline-none text-sm py-1" placeholder="Name" />
                  </div>
                </div>
              </div>
            </div>

            {/* Email Copy Toggle */}
            <div className="flex items-center gap-3 pt-6">
              <input type="checkbox" id="sendCopy" className="w-5 h-5 accent-accent" />
              <label htmlFor="sendCopy" className="text-gray-700 font-medium cursor-pointer">Send me a copy of my responses.</label>
            </div>

            {/* Actions */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 btn-primary py-4 text-lg flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent animate-spin rounded-full"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
              <button 
                type="reset"
                className="btn-outline border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Clear Form
              </button>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Never submit passwords through this form. reCAPTCHA protected.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
