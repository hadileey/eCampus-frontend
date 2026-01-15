import React, { useState } from "react";
import "../../../App.css"; 
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Briefcase, 
  Camera, 
  Save, 
  Lock,
  BadgeCheck,
  Shield
} from "lucide-react";

// Dummy Faculty Data
const DUMMY_PROFILE = {
  firstName: "Robert",
  lastName: "Langdon",
  email: "r.langdon@university.edu",
  phone: "+1 (555) 012-3456",
  employeeId: "FAC-2024-001",
  department: "Computer Science & Engineering",
  designation: "Senior Professor",
  bio: "Specializing in Algorithms and Data Structures with over 10 years of teaching experience.",
  joinDate: "August 15, 2018"
};

const InstructorSettings = () => {
  const [formData, setFormData] = useState(DUMMY_PROFILE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col pt-6">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Account Settings
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Manage your personal profile and account security.
          </p>
        </div>

        {/* Profile Header Card (Banner Removed) */}
        <div className="bg-white border border-dashed border-gray-300 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Avatar Section */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-3xl font-bold text-slate-500 border border-slate-200">
                {formData.firstName[0]}{formData.lastName[0]}
              </div>
              <button className="absolute -bottom-1 -right-1 p-2 bg-[#e2343c] text-white rounded-full shadow-md hover:bg-[#c92a31] transition-colors border-2 border-white">
                <Camera size={14} />
              </button>
            </div>

            {/* Name & Details */}
            <div className="flex-1 text-center md:text-left space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                 <h2 className="text-2xl font-bold text-slate-900">
                    Dr. {formData.firstName} {formData.lastName}
                 </h2>
                 <BadgeCheck size={20} className="text-[#e2343c]" />
              </div>
              <p className="text-slate-500 font-medium">{formData.designation}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-sm text-slate-400">
                 <span className="flex items-center gap-1"><Building size={14} /> {formData.department}</span>
                 <span className="hidden md:flex items-center gap-1"><Briefcase size={14} /> {formData.employeeId}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="shrink-0">
                 <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                    <Shield size={12} /> Account Verified
                 </span>
            </div>
        </div>

        {/* Main Form Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column: Personal Info */}
            <div className="md:col-span-2 space-y-8">
                
                {/* Personal Information */}
                <div className="bg-white p-8 border border-dashed border-gray-300 ">
                    <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                        <User className="text-[#e2343c]" size={20} />
                        <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                            <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm focus:border-[#e2343c] focus:ring-1 focus:ring-[#e2343c] outline-none transition-all text-sm" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                            <input 
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm focus:border-[#e2343c] focus:ring-1 focus:ring-[#e2343c] outline-none transition-all text-sm" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-sm focus:border-[#e2343c] focus:ring-1 focus:ring-[#e2343c] outline-none transition-all text-sm" 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                <input 
                                    type="text" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-sm focus:border-[#e2343c] focus:ring-1 focus:ring-[#e2343c] outline-none transition-all text-sm" 
                                />
                            </div>
                        </div>
                        <div className="md:col-span-2">
                             <label className="block text-sm font-semibold text-slate-700 mb-2">Bio / Description</label>
                             <textarea 
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm focus:border-[#e2343c] focus:ring-1 focus:ring-[#e2343c] outline-none transition-all text-sm resize-none"
                             ></textarea>
                        </div>
                    </div>
                </div>

                {/* Academic Information (Read Only) */}
                <div className="bg-white p-8 border border-dashed border-gray-300">
                    <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                        <Briefcase className="text-[#e2343c]" size={20} />
                        <h3 className="text-lg font-bold text-slate-900">Academic Details</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-500 mb-2">Employee ID</label>
                            <input 
                                type="text" 
                                value={formData.employeeId}
                                disabled
                                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-sm text-slate-500 text-sm cursor-not-allowed font-mono" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-500 mb-2">Join Date</label>
                            <input 
                                type="text" 
                                value={formData.joinDate}
                                disabled
                                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-sm text-slate-500 text-sm cursor-not-allowed" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-500 mb-2">Department</label>
                            <div className="relative">
                                <Building className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                <input 
                                    type="text" 
                                    value={formData.department}
                                    disabled
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-sm text-slate-500 text-sm cursor-not-allowed" 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-500 mb-2">Designation</label>
                            <input 
                                type="text" 
                                value={formData.designation}
                                disabled
                                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-sm text-slate-500 text-sm cursor-not-allowed" 
                            />
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-slate-400 italic">
                        * Academic details are managed by the administration. Contact HR for corrections.
                    </p>
                </div>
            </div>

            {/* Right Column: Security & Actions */}
            <div className="space-y-6">
                
                {/* Security Card */}
                <div className="bg-white p-6 border border-dashed border-gray-300">
                     <div className="flex items-center gap-2 mb-4">
                        <Lock className="text-[#e2343c]" size={20} />
                        <h3 className="text-lg font-bold text-slate-900">Security</h3>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Current Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:border-[#e2343c] focus:ring-1 focus:ring-[#e2343c] text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">New Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:border-[#e2343c] focus:ring-1 focus:ring-[#e2343c] text-sm" />
                        </div>
                        <button className="custom-button2 w-full justify-center">Update Password</button>
                    </div>
                </div>

                {/* Save Actions */}
                <div className="bg-white p-6 border border-dashed border-gray-300  sticky top-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Save Changes</h3>
                    <p className="text-sm text-slate-500 mb-4">
                        Review your changes before saving.
                    </p>
                    <div className="flex flex-col gap-3">
                        <button className="custom-button w-full justify-center h-11 text-base">
                             <Save size={18} /> Save Profile
                        </button>
                        <button className="px-4 py-2 text-slate-500 hover:text-slate-800 font-medium transition-colors text-sm">
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default InstructorSettings;