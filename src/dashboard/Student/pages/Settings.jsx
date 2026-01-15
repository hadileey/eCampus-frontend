import React, { useState } from "react";
import "../../../App.css"; 
import { 
  Bell, 
  Globe, 
  Lock, 
  Monitor, 
  Shield, 
  Save, 
  Moon, 
  Smartphone,
  Mail,
  Eye,
  CreditCard,
  HelpCircle,
  ChevronRight
} from "lucide-react";

const SETTINGS_TABS = [
  { id: "general", label: "General", icon: Globe, desc: "Language, Timezone & Region" },
  { id: "notifications", label: "Notifications", icon: Bell, desc: "Email & Push Preferences" },
  { id: "privacy", label: "Privacy", icon: Lock, desc: "Password & Security" },
  { id: "appearance", label: "Appearance", icon: Monitor, desc: "Theme & Display" },
];

const StudentSettings = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col pt-6">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            System Settings
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Manage application preferences and system configurations.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar: Navigation */}
            <div className="lg:col-span-1 space-y-1">
                {SETTINGS_TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-5 py-4 border-l-4 transition-all duration-200 group flex items-start gap-3 ${
                            activeTab === tab.id 
                            ? "bg-white border-[#e2343c] shadow-none" 
                            : "border-transparent hover:bg-white hover:border-gray-200"
                        }`}
                    >
                        <tab.icon 
                            size={20} 
                            className={`mt-0.5 ${activeTab === tab.id ? "text-[#e2343c]" : "text-slate-400 group-hover:text-slate-600"}`} 
                        />
                        <div>
                            <span className={`block font-bold ${activeTab === tab.id ? "text-slate-900" : "text-slate-600"}`}>
                                {tab.label}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">
                                {tab.desc}
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Right Panel: Content */}
            <div className="lg:col-span-3">
                <div className="bg-white border border-dashed border-gray-300 p-8 min-h-[500px]">
                    
                    {/* --- GENERAL SETTINGS --- */}
                    {activeTab === "general" && (
                        <div className="space-y-8">
                            <div className="border-b border-gray-100 pb-4 mb-6">
                                <h2 className="text-xl font-bold text-slate-900">General Preferences</h2>
                                <p className="text-sm text-slate-500">Configure your regional settings.</p>
                            </div>

                            <div className="grid grid-cols-1 gap-6 max-w-lg">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Display Language</label>
                                    <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#e2343c] focus:ring-0 outline-none rounded-none text-slate-700">
                                        <option>English (United States)</option>
                                        <option>Spanish (Español)</option>
                                        <option>French (Français)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Time Zone</label>
                                    <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#e2343c] focus:ring-0 outline-none rounded-none text-slate-700">
                                        <option>(GMT-05:00) Eastern Time</option>
                                        <option>(GMT-08:00) Pacific Time</option>
                                        <option>(GMT+00:00) London</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Date Format</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="datefmt" className="text-[#e2343c] focus:ring-0" defaultChecked />
                                            <span className="text-sm text-slate-600">MM/DD/YYYY</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="datefmt" className="text-[#e2343c] focus:ring-0" />
                                            <span className="text-sm text-slate-600">DD/MM/YYYY</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- NOTIFICATIONS SETTINGS --- */}
                    {activeTab === "notifications" && (
                        <div className="space-y-8">
                             <div className="border-b border-gray-100 pb-4 mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Notification Preferences</h2>
                                <p className="text-sm text-slate-500">Choose how and when you want to be notified.</p>
                            </div>

                            <div className="space-y-6">
                                {/* Email Group */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                                        <Mail size={16} /> Email Alerts
                                    </h3>
                                    <div className="space-y-3 pl-6 border-l-2 border-gray-100">
                                        <label className="flex items-center justify-between group cursor-pointer">
                                            <span className="text-slate-700 font-medium">New assignment submissions</span>
                                            <input type="checkbox" className="w-5 h-5 border-gray-300 text-[#e2343c] focus:ring-0 rounded-none" defaultChecked />
                                        </label>
                                        <label className="flex items-center justify-between group cursor-pointer">
                                            <span className="text-slate-700 font-medium">Student queries & messages</span>
                                            <input type="checkbox" className="w-5 h-5 border-gray-300 text-[#e2343c] focus:ring-0 rounded-none" defaultChecked />
                                        </label>
                                        <label className="flex items-center justify-between group cursor-pointer">
                                            <span className="text-slate-700 font-medium">System maintenance updates</span>
                                            <input type="checkbox" className="w-5 h-5 border-gray-300 text-[#e2343c] focus:ring-0 rounded-none" />
                                        </label>
                                    </div>
                                </div>

                                {/* Push Group */}
                                <div className="pt-4">
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                                        <Smartphone size={16} /> Push Notifications
                                    </h3>
                                    <div className="space-y-3 pl-6 border-l-2 border-gray-100">
                                        <label className="flex items-center justify-between group cursor-pointer">
                                            <span className="text-slate-700 font-medium">Immediate grade publishing</span>
                                            <input type="checkbox" className="w-5 h-5 border-gray-300 text-[#e2343c] focus:ring-0 rounded-none" defaultChecked />
                                        </label>
                                        <label className="flex items-center justify-between group cursor-pointer">
                                            <span className="text-slate-700 font-medium">Daily summary report</span>
                                            <input type="checkbox" className="w-5 h-5 border-gray-300 text-[#e2343c] focus:ring-0 rounded-none" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- PRIVACY SETTINGS --- */}
                    {activeTab === "privacy" && (
                        <div className="space-y-8">
                            <div className="border-b border-gray-100 pb-4 mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Privacy & Security</h2>
                                <p className="text-sm text-slate-500">Manage visibility and data security.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start justify-between p-4 border border-gray-200 bg-slate-50">
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1">Profile Visibility</h4>
                                        <p className="text-sm text-slate-500">Allow students to see your full profile and bio.</p>
                                    </div>
                                    <div className="flex items-center">
                                        <button className="bg-[#e2343c] text-white px-3 py-1 text-xs font-bold uppercase rounded-none">Visible</button>
                                        <button className="bg-white border border-l-0 border-gray-300 text-slate-500 px-3 py-1 text-xs font-bold uppercase rounded-none hover:bg-gray-50">Hidden</button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-gray-200">
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1">Two-Factor Authentication</h4>
                                        <p className="text-sm text-slate-500">Add an extra layer of security to your account.</p>
                                    </div>
                                    <button className="border border-gray-300 px-4 py-2 text-sm font-bold hover:border-[#e2343c] hover:text-[#e2343c] transition-colors rounded-none">
                                        Enable 2FA
                                    </button>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-gray-200">
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1">Active Sessions</h4>
                                        <p className="text-sm text-slate-500">Manage devices currently logged into your account.</p>
                                    </div>
                                    <button className="text-[#e2343c] text-sm font-bold hover:underline flex items-center gap-1">
                                        View Devices <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                     {/* --- APPEARANCE SETTINGS --- */}
                     {activeTab === "appearance" && (
                        <div className="space-y-8">
                             <div className="border-b border-gray-100 pb-4 mb-6">
                                <h2 className="text-xl font-bold text-slate-900">Appearance</h2>
                                <p className="text-sm text-slate-500">Customize the look and feel of your dashboard.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Light Mode */}
                                <div className="border-2 border-[#e2343c] p-4 cursor-pointer relative">
                                    <div className="absolute top-2 right-2 text-[#e2343c]">
                                        <div className="w-3 h-3 bg-[#e2343c] rounded-full"></div>
                                    </div>
                                    <div className="h-24 bg-gray-100 mb-3 border border-gray-200"></div>
                                    <h4 className="font-bold text-slate-900 text-center">Light Mode</h4>
                                </div>
                                
                                {/* Dark Mode */}
                                <div className="border border-gray-200 p-4 cursor-pointer hover:border-gray-400 transition-colors">
                                    <div className="h-24 bg-slate-800 mb-3 border border-slate-700"></div>
                                    <h4 className="font-bold text-slate-900 text-center">Dark Mode</h4>
                                </div>

                                {/* System */}
                                <div className="border border-gray-200 p-4 cursor-pointer hover:border-gray-400 transition-colors">
                                    <div className="h-24 bg-gradient-to-r from-gray-100 to-slate-800 mb-3 border border-gray-200"></div>
                                    <h4 className="font-bold text-slate-900 text-center">System Default</h4>
                                </div>
                            </div>

                            <div className="pt-6">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 border-gray-300 text-[#e2343c] focus:ring-0 rounded-none" />
                                    <span className="text-slate-700 font-medium">Reduce motion and animations</span>
                                </label>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer Action Bar */}
                <div className="mt-6 flex justify-end gap-4">
                    <button className="px-6 py-3 text-slate-500 font-bold hover:text-slate-900 transition-colors rounded-none">
                        Cancel
                    </button>
                    <button className="px-8 py-3 bg-[#e2343c] text-white font-bold hover:bg-[#c92a31] transition-all rounded-none flex items-center gap-2">
                        <Save size={18} /> Save Preferences
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default StudentSettings;