import React from "react";
import "../../../App.css"
import {
  BookOpen,
  Users,
  Layers,
  BarChart2,
  PlusCircle,
  FileQuestion,
  Eye,
  ArrowRight,
  MoreVertical,
  Clock,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Primary Color Constant for reference: #e2343c

/* ---------- Stat Card ---------- */
const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="group border border-dashed border-gray-300 bg-white p-6 transition-all duration-300 ease-in-out relative overflow-hidden">
    <div className="flex items-center justify-between relative z-10">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{value}</h3>
      </div>
      <div className="h-12 w-12 flex items-center justify-center bg-[#e2343c] text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
    </div>
    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#e2343c]/5 rounded-full scale-150 transition-transform duration-500"></div>
  </div>
);

/* ---------- Subject Card ---------- */
const SubjectCard = ({ name, code, students, modules }) => (
  <div className="group bg-white border border-dashed border-gray-300 transition-all duration-300 flex flex-col h-full">
    <div className="p-6 flex-1 relative">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
          {code}
        </span>
        <button className="text-slate-400 hover:text-[#e2343c] transition-colors">
            <MoreVertical size={20} />
        </button>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#e2343c] transition-colors">
        {name}
      </h3>
      
      <div className="flex items-center gap-4 text-sm text-slate-500 mt-4">
        <div className="flex items-center gap-1.5">
          <Users size={16} className="text-[#e2343c]" />
          <span><strong className="text-slate-700">{students}</strong> Students</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Layers size={16} className="text-[#e2343c]" />
          <span><strong className="text-slate-700">{modules}</strong> Modules</span>
        </div>
      </div>
    </div>

    {/* Footer Actions */}
    <div className="p-4 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-3">
      <Link to="subjects" className="custom-button2">
        <Eye size={16} /> Students
      </Link>
      <Link to="subjects" className="custom-button">
        Manage <ChevronRight size={16} />
      </Link>
    </div>
  </div>
);

const ActivityItem = ({ text, time }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    <div className="absolute -left-[3px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#e2343c]"></div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between -mt-1.5">
      <p className="text-sm font-medium text-slate-700 w-50">{text}</p>
      <span className="text-xs text-slate-400 flex items-center gap-1 mt-1 sm:mt-0">
        <Clock size={12} /> {time}
      </span>
    </div>
  </div>
);

const InstructorDashboard = () => {
  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Welcome back, Instructor. Here's what's happening today.
            </p>
          </div>
          <div className="flex gap-3">
             <button className="custom-button2">
                View Reports
             </button>
             <button className="custom-button">
                <PlusCircle size={18} /> New Course
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={BookOpen} label="Assigned Subjects" value="4" />
          <StatCard icon={Layers} label="Total Modules" value="18" />
          <StatCard icon={Users} label="Total Students" value="220" />
          <StatCard icon={BarChart2} label="Avg Completion" value="72%" />
        </div>

        {/* Main Content Grid - The parent grid handles equal height stretching */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-10">
            
            {/* Left Column: Subjects */}
            <div className="lg:col-span-2 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        My Subjects
                    </h2>
                    <Link to="/subjects" className="text-sm font-semibold text-[#e2343c] flex items-center gap-1 hover:gap-2 transition-all">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>
                
                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    <SubjectCard
                        name="Advanced React Patterns"
                        code="CS401"
                        students={120}
                        modules={8}
                    />
                    <SubjectCard
                        name="Backend Architecture"
                        code="CS405"
                        students={60}
                        modules={6}
                    />
                    <SubjectCard
                        name="UI / UX Fundamentals"
                        code="DES101"
                        students={40}
                        modules={4}
                    />
                    {/* Create New Card - Completes the 2x2 grid */}
                    <div className="group border border-dashed border-gray-300 flex flex-col items-center justify-center p-6 hover:border-[#e2343c]/50 hover:bg-[#e2343c]/5 transition-all duration-500 cursor-pointer h-full min-h-[200px]">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3 group-hover:bg-white group-hover:text-[#e2343c] transition-colors duration-500">
                            <PlusCircle size={24} />
                        </div>
                        <span className="font-semibold text-slate-500 group-hover:text-[#e2343c] transition-all duration-500">Create New Subject</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Activity */}
            {/* 'h-full' here forces this container to match the height of the left column */}
            <div className="h-full flex flex-col"> 
                 {/* Spacing to align top of card with top of subject cards (accounting for header) */}
                <div className="mb-6 h-[32px] md:h-[32px] invisible">Placeholder Header Align</div>

                <div className="bg-white p-6 border border-gray-300 border-dashed h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
                        <button className="text-slate-400 hover:text-[#e2343c]"><MoreVertical size={18} /></button>
                    </div>
                    
                    {/* Flex-1 pushes the button to the bottom, spacing items out */}
                    <div className="flex-1 flex flex-col gap-1"> 
                        <ActivityItem text="You added a new module to Advanced React" time="2 hrs ago" />
                        <ActivityItem text="New lesson created in Backend Architecture" time="5 hrs ago" />
                        <ActivityItem text="MCQs added for UI / UX Fundamentals" time="1 day ago" />
                        <ActivityItem text="Viewed student progress for CS401" time="2 days ago" />
                        <ActivityItem text="System maintenance scheduled for weekend" time="3 days ago" />
                    </div>
                    
                    <button className="custom-button2 w-full mt-6 h-10">
                        View Full History
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;