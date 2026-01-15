import React from "react";
import "../../../App.css"; 
import { 
  Users, 
  UserPlus, 
  UserMinus, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download,
  MoreHorizontal,
  GraduationCap
} from "lucide-react";

// Dummy Data
const RECENT_STUDENTS = [
  { id: "2024-001", name: "Alice Johnson", course: "B.Tech CS", date: "Oct 24, 2024", status: "Active" },
  { id: "2024-002", name: "Mark Evans", course: "BBA", date: "Oct 23, 2024", status: "Pending" },
  { id: "2024-003", name: "Sarah Connor", course: "B.Sc IT", date: "Oct 22, 2024", status: "Active" },
  { id: "2024-004", name: "Kyle Reese", course: "B.Tech CS", date: "Oct 21, 2024", status: "Rejected" },
  { id: "2024-005", name: "John Doe", course: "B.Sc IT", date: "Oct 20, 2024", status: "Active" },
];

const COURSE_DISTRIBUTION = [
  { name: "Computer Science", count: 120, pct: 45, color: "bg-[#e2343c]" },
  { name: "Information Tech", count: 80, pct: 30, color: "bg-blue-600" },
  { name: "Business Admin", count: 45, pct: 15, color: "bg-yellow-500" },
  { name: "Mechanical Eng.", count: 25, pct: 10, color: "bg-slate-500" },
];

/* Reusable Stat Card */
const OverviewStat = ({ label, value, trend, trendUp, icon: Icon, color }) => (
  <div className="bg-white border border-dashed border-gray-300 p-6 flex flex-col justify-between h-full hover:border-[#e2343c]/50 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 ${color} bg-opacity-10 text-white`}>
        <Icon size={24} className={color.replace("bg-", "text-")} />
      </div>
      {trend && (
        <span className={`flex items-center text-xs font-bold ${trendUp ? "text-green-600" : "text-red-500"}`}>
          {trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {trend}
        </span>
      )}
    </div>
    <div>
      <h3 className="text-3xl font-extrabold text-slate-900">{value}</h3>
      <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mt-1">{label}</p>
    </div>
  </div>
);

const StudentOverview = () => {
  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Students Overview
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Demographics, enrollment stats, and recent activity.
            </p>
          </div>
          <button className="custom-button2 flex items-center gap-2 border border-gray-300 hover:border-[#e2343c] bg-white px-5 py-2.5 rounded-none">
            <Download size={18} /> Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewStat 
            label="Total Students" 
            value="2,450" 
            trend="12% vs last year" 
            trendUp={true} 
            icon={Users} 
            color="bg-slate-800" 
          />
          <OverviewStat 
            label="New Enrollments" 
            value="145" 
            trend="5% vs last month" 
            trendUp={true} 
            icon={UserPlus} 
            color="bg-[#e2343c]" 
          />
          <OverviewStat 
            label="Avg. Attendance" 
            value="84%" 
            trend="2% vs last month" 
            trendUp={false} 
            icon={Clock} 
            color="bg-blue-600" 
          />
          <OverviewStat 
            label="Dropouts" 
            value="12" 
            trend="Stable" 
            trendUp={true} 
            icon={UserMinus} 
            color="bg-orange-500" 
          />
        </div>

        {/* Charts & Lists Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Col: Attendance Trend Chart */}
            <div className="lg:col-span-2 bg-white border border-dashed border-gray-300 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-slate-900">Weekly Attendance Trend</h3>
                    <select className="border border-gray-300 text-sm p-2 rounded-none focus:outline-none focus:border-[#e2343c]">
                        <option>This Month</option>
                        <option>Last Month</option>
                    </select>
                </div>

                {/* CSS Bar Chart */}
                <div className="h-64 flex items-end justify-between gap-2 md:gap-4 px-2">
                    {[65, 70, 45, 80, 55, 90, 75, 60, 85, 95, 70, 80].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group h-full">
                            <div 
                                className="w-full bg-slate-800 hover:bg-[#e2343c] transition-colors relative"
                                style={{ height: `${height}%` }}
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    {height}%
                                </div>
                            </div>
                            <span className="text-[10px] text-slate-400 text-center mt-2 font-bold uppercase">W{i+1}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Col: Course Distribution */}
            <div className="bg-white border border-dashed border-gray-300 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Course Distribution</h3>
                
                <div className="space-y-6">
                    {COURSE_DISTRIBUTION.map((item) => (
                        <div key={item.name}>
                            <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                                <span>{item.name}</span>
                                <span className="text-slate-400">{item.count}</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2">
                                <div 
                                    className={`h-2 ${item.color}`} 
                                    style={{ width: `${item.pct}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-slate-100 text-slate-600">
                            <GraduationCap size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">Top Performing Course</p>
                            <p className="text-sm font-bold text-slate-900">Computer Science (92% Pass Rate)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Recent Enrollments Table */}
        <div className="bg-white border border-dashed border-gray-300 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Recent Enrollments</h3>
                <button className="text-sm font-bold text-[#e2343c] hover:underline">View All Students</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-slate-100">
                            <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Student ID</th>
                            <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                            <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Course</th>
                            <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="py-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-700">
                        {RECENT_STUDENTS.map((student) => (
                            <tr key={student.id} className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                                <td className="py-4 font-mono text-slate-400">{student.id}</td>
                                <td className="py-4 font-bold text-slate-900">{student.name}</td>
                                <td className="py-4">{student.course}</td>
                                <td className="py-4">{student.date}</td>
                                <td className="py-4">
                                    <span className={`px-2 py-1 text-[10px] uppercase font-bold border ${
                                        student.status === "Active" ? "border-green-200 text-green-700 bg-green-50" :
                                        student.status === "Pending" ? "border-yellow-200 text-yellow-700 bg-yellow-50" :
                                        "border-red-200 text-red-700 bg-red-50"
                                    }`}>
                                        {student.status}
                                    </span>
                                </td>
                                <td className="py-4 text-right">
                                    <button className="text-slate-400 hover:text-[#e2343c]">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  );
};

export default StudentOverview;