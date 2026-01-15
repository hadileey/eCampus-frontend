import React, { useState } from "react";
import "../../../App.css"; 
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Download, 
  Search, 
  Filter,
  MoreHorizontal,
  AlertCircle,
  CheckCircle
} from "lucide-react";

// Dummy Progress Data
const STUDENT_PROGRESS = [
  { id: "S01", name: "Alice Johnson", course: "B.Tech CS", completed: 92, grade: 88, status: "Excellent" },
  { id: "S02", name: "Michael Chen", course: "B.Tech CS", completed: 75, grade: 72, status: "Good" },
  { id: "S03", name: "Sarah Williams", course: "B.Sc IT", completed: 45, grade: 50, status: "At Risk" },
  { id: "S04", name: "James Smith", course: "BBA", completed: 60, grade: 65, status: "Average" },
  { id: "S05", name: "Emily Davis", course: "B.Tech CS", completed: 15, grade: 40, status: "Critical" },
  { id: "S06", name: "Robert Brown", course: "B.Sc IT", completed: 82, grade: 85, status: "Good" },
  { id: "S07", name: "Linda Wilson", course: "BBA", completed: 98, grade: 95, status: "Excellent" },
];

/* Helper for Progress Bar Color */
const getProgressColor = (value) => {
  if (value >= 80) return "bg-green-600";
  if (value >= 60) return "bg-blue-600";
  if (value >= 40) return "bg-yellow-500";
  return "bg-[#e2343c]";
};

const StudentProgress = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = STUDENT_PROGRESS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Student Progress
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Analyze class performance, completion rates, and grades.
            </p>
          </div>
          <button className="custom-button2 flex items-center gap-2 border border-gray-300 hover:border-[#e2343c] bg-white px-4 py-2 rounded-none">
            <Download size={18} /> Export Report
          </button>
        </div>

        {/* Top Stats Row (Sharp Edges) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Stat 1 */}
            <div className="bg-white border border-dashed border-gray-300 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Avg. Class Grade</p>
                        <h3 className="text-3xl font-extrabold text-slate-900 mt-1">78%</h3>
                    </div>
                    <div className="p-2 bg-green-50 text-green-600">
                        <TrendingUp size={20} />
                    </div>
                </div>
                <p className="text-xs text-green-600 mt-4 font-bold flex items-center gap-1">
                    +4.2% <span className="text-slate-400 font-normal">vs last month</span>
                </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-dashed border-gray-300 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Completion Rate</p>
                        <h3 className="text-3xl font-extrabold text-slate-900 mt-1">62%</h3>
                    </div>
                    <div className="p-2 bg-blue-50 text-blue-600">
                        <BookOpen size={20} />
                    </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                    12 students have finished all modules.
                </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-dashed border-gray-300 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Students at Risk</p>
                        <h3 className="text-3xl font-extrabold text-[#e2343c] mt-1">5</h3>
                    </div>
                    <div className="p-2 bg-red-50 text-[#e2343c]">
                        <AlertCircle size={20} />
                    </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                    Require immediate attention.
                </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white border border-dashed border-gray-300 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Total Students</p>
                        <h3 className="text-3xl font-extrabold text-slate-900 mt-1">42</h3>
                    </div>
                    <div className="p-2 bg-slate-100 text-slate-600">
                        <Users size={20} />
                    </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                    Active in current semester.
                </p>
            </div>
        </div>

        {/* Grade Distribution Chart (CSS Only - Flat Design) */}
        <div className="bg-white border border-dashed border-gray-300 p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Grade Distribution</h3>
            
            {/* Simple Bar Visualization */}
            <div className="flex items-end h-48 gap-4 md:gap-8 border-b border-gray-200 pb-2">
                {/* Bar A */}
                <div className="flex-1 flex flex-col justify-end group">
                    <div className="w-full bg-green-500 h-[30%] relative hover:bg-green-600 transition-colors">
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100">30%</div>
                    </div>
                    <p className="text-center text-xs font-bold text-slate-500 mt-2">A (90+)</p>
                </div>
                {/* Bar B */}
                <div className="flex-1 flex flex-col justify-end group">
                    <div className="w-full bg-blue-500 h-[55%] relative hover:bg-blue-600 transition-colors">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100">55%</div>
                    </div>
                    <p className="text-center text-xs font-bold text-slate-500 mt-2">B (75-89)</p>
                </div>
                {/* Bar C */}
                <div className="flex-1 flex flex-col justify-end group">
                    <div className="w-full bg-yellow-400 h-[25%] relative hover:bg-yellow-500 transition-colors">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100">25%</div>
                    </div>
                    <p className="text-center text-xs font-bold text-slate-500 mt-2">C (60-74)</p>
                </div>
                {/* Bar D */}
                <div className="flex-1 flex flex-col justify-end group">
                    <div className="w-full bg-orange-400 h-[10%] relative hover:bg-orange-500 transition-colors">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100">10%</div>
                    </div>
                    <p className="text-center text-xs font-bold text-slate-500 mt-2">D (40-59)</p>
                </div>
                {/* Bar F */}
                <div className="flex-1 flex flex-col justify-end group">
                    <div className="w-full bg-[#e2343c] h-[5%] relative hover:bg-red-700 transition-colors">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100">5%</div>
                    </div>
                    <p className="text-center text-xs font-bold text-slate-500 mt-2">F (&lt;40)</p>
                </div>
            </div>
        </div>

        {/* Detailed Progress Table */}
        <div className="space-y-4">
             {/* Filter Bar */}
             <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 border border-dashed border-gray-300">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search student name..." 
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-200 focus:outline-none focus:border-[#e2343c] focus:ring-0 text-sm rounded-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#e2343c] px-4 py-2 border border-gray-200 hover:border-gray-300 bg-white rounded-none">
                    <Filter size={16} /> Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-dashed border-gray-300 overflow-x-auto">
                <table className="min-w-full text-left">
                    <thead>
                        <tr className="bg-slate-50 border-b border-gray-200">
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Course</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">Module Completion</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Current Grade</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredStudents.map((student) => (
                            <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-900">{student.name}</div>
                                    <div className="text-xs text-slate-400 font-mono">{student.id}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {student.course}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-full bg-slate-100 h-3 rounded-none overflow-hidden">
                                        <div 
                                            className={`h-full ${getProgressColor(student.completed)} rounded-none`} 
                                            style={{ width: `${student.completed}%` }}
                                        ></div>
                                    </div>
                                    <div className="text-right text-xs font-bold text-slate-500 mt-1">{student.completed}%</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-slate-900">{student.grade}%</span>
                                </td>
                                <td className="px-6 py-4">
                                    {student.status === "Excellent" && <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-none">Excellent</span>}
                                    {student.status === "Good" && <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-none">Good</span>}
                                    {student.status === "Average" && <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase rounded-none">Average</span>}
                                    {student.status === "At Risk" && <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold uppercase rounded-none">At Risk</span>}
                                    {student.status === "Critical" && <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-none">Critical</span>}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-[#e2343c]">
                                        <MoreHorizontal size={20} />
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

export default StudentProgress;