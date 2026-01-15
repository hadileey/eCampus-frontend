import React, { useState } from "react";
import "../../../App.css"; 
import { 
  Clock, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  MessageSquare, 
  Upload, 
  Settings, 
  Filter, 
  Calendar, 
  Search,
  Download
} from "lucide-react";

// Dummy Activity Data
const DUMMY_ACTIVITIES = [
  {
    id: 1,
    type: "upload",
    title: "New Syllabus Uploaded",
    description: "You uploaded 'CS101_Syllabus_v2.pdf' to Introduction to Computer Science.",
    time: "10:30 AM",
    date: "Today",
    isNew: true,
  },
  {
    id: 2,
    type: "grading",
    title: "Grades Finalized",
    description: "Mid-term grades for 'Data Structures' have been submitted.",
    time: "09:15 AM",
    date: "Today",
    isNew: true,
  },
  {
    id: 3,
    type: "message",
    title: "Student Query Reply",
    description: "Replied to Sarah Williams regarding Assignment 3.",
    time: "08:45 AM",
    date: "Today",
    isNew: false,
  },
  {
    id: 4,
    type: "alert",
    title: "System Maintenance Warning",
    description: "The LMS will be down for maintenance on Sunday at 2:00 AM.",
    time: "Yesterday",
    date: "Yesterday",
    isNew: false,
  },
  {
    id: 5,
    type: "settings",
    title: "Profile Updated",
    description: "You updated your office hours in profile settings.",
    time: "2 days ago",
    date: "Sep 12",
    isNew: false,
  },
  {
    id: 6,
    type: "upload",
    title: "Lecture Slides Added",
    description: "Week 4 slides added to 'Web Development Fundamentals'.",
    time: "3 days ago",
    date: "Sep 11",
    isNew: false,
  },
];

/* Helper to get icon and color based on type */
const getActivityStyle = (type) => {
  switch (type) {
    case "upload":
      return { icon: Upload, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
    case "grading":
      return { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
    case "alert":
      return { icon: AlertCircle, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" };
    case "message":
      return { icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" };
    case "settings":
      return { icon: Settings, color: "text-slate-600", bg: "bg-slate-100", border: "border-gray-200" };
    default:
      return { icon: FileText, color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" };
  }
};

/* Single Activity Item Component */
const ActivityItem = ({ item }) => {
  const style = getActivityStyle(item.type);
  const Icon = style.icon;

  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute top-0 left-[19px] h-full w-px bg-gray-200 group-last:hidden"></div>
      
      {/* Timeline Icon (Square, No Shadow) */}
      <div className={`absolute top-0 left-0 w-10 h-10 ${style.bg} border ${style.border} flex items-center justify-center z-10  rounded-full`}>
        <Icon size={18} className={style.color} />
      </div>

      {/* Content Card (No Rounding, No Shadow) */}
      <div className="bg-white border border-dashed border-gray-300 p-5 ml-6 hover:border-[#e2343c]/30 transition-colors">
        <div className="flex justify-between items-start">
            <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    {item.title}
                    {item.isNew && (
                        <span className="bg-[#e2343c] text-white text-[10px] px-2 py-0.5 uppercase tracking-wide font-bold">New</span>
                    )}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                </p>
            </div>
            <div className="shrink-0 text-right">
                 <span className="text-xs font-bold text-slate-400 block">{item.date}</span>
                 <span className="text-xs text-slate-400 flex items-center gap-1 justify-end mt-1">
                    <Clock size={12} /> {item.time}
                 </span>
            </div>
        </div>
      </div>
    </div>
  );
};

const InstructorActivity = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Activity Log
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Track your actions, system alerts, and student interactions.
            </p>
          </div>
          <button className="custom-button2 flex items-center gap-2 border-0 bg-white border border-gray-300 hover:border-[#e2343c] px-4 py-2">
            <Download size={18} /> Export Log
          </button>
        </div>

        {/* Main Layout: Timeline + Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Timeline */}
            <div className="lg:col-span-2 space-y-6">
                
                {/* Search Bar (Sharp Edges) */}
                <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search activity history..." 
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-dashed border-gray-300 focus:outline-none focus:border-[#e2343c] focus:ring-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Timeline Container */}
                <div className="py-4">
                    {DUMMY_ACTIVITIES.map((activity) => (
                        <ActivityItem key={activity.id} item={activity} />
                    ))}
                </div>

                 {/* Load More (Sharp Button) */}
                 <button className="w-full py-3 text-sm font-semibold text-slate-500 hover:text-[#e2343c] border border-dashed border-gray-300 bg-white hover:bg-slate-50 transition-colors">
                    Load Older Activities
                 </button>
            </div>

            {/* Right Column: Filters & Stats */}
            <div className="space-y-6">
                
                {/* Filter Card (Sharp) */}
                <div className="bg-white p-6 border border-dashed border-gray-300">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                        <Filter className="text-[#e2343c]" size={18} />
                        <h3 className="text-lg font-bold text-slate-900">Filters</h3>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Activity Type</label>
                            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:text-[#e2343c]">
                                <input type="checkbox" className="text-[#e2343c] focus:ring-0 rounded-none border-gray-300" defaultChecked /> Uploads & Content
                            </label>
                            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:text-[#e2343c]">
                                <input type="checkbox" className="text-[#e2343c] focus:ring-0 rounded-none border-gray-300" defaultChecked /> Grading
                            </label>
                            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:text-[#e2343c]">
                                <input type="checkbox" className="text-[#e2343c] focus:ring-0 rounded-none border-gray-300" defaultChecked /> System Alerts
                            </label>
                            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:text-[#e2343c]">
                                <input type="checkbox" className="text-[#e2343c] focus:ring-0 rounded-none border-gray-300" /> Account Settings
                            </label>
                        </div>

                        <div className="pt-2">
                             <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Date Range</label>
                             <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 text-sm text-slate-600 hover:border-[#e2343c] transition-colors bg-slate-50">
                                <span>Last 7 Days</span>
                                <Calendar size={14} />
                             </button>
                        </div>
                    </div>
                </div>

                {/* Summary Card (Sharp Red Block) */}
                <div className="bg-[#e2343c] p-6 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-1">Weekly Summary</h3>
                        <p className="text-white/80 text-sm mb-4">You've been active this week.</p>
                        
                        <div className="flex justify-between items-center text-center">
                            <div>
                                <div className="text-2xl font-extrabold">12</div>
                                <div className="text-xs text-white/70 uppercase">Uploads</div>
                            </div>
                            <div className="w-px h-8 bg-white/20"></div>
                            <div>
                                <div className="text-2xl font-extrabold">45</div>
                                <div className="text-xs text-white/70 uppercase">Grades</div>
                            </div>
                            <div className="w-px h-8 bg-white/20"></div>
                            <div>
                                <div className="text-2xl font-extrabold">8</div>
                                <div className="text-xs text-white/70 uppercase">Alerts</div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Diamond (Sharp) */}
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rotate-45"></div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default InstructorActivity;