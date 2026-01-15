import React, { useState } from "react";
import "../../../App.css"; 
import { 
  Search, 
  Filter, 
  MoreVertical, 
  User, 
  Mail, 
  GraduationCap, 
  BarChart, 
  Calendar,
  Download,
  PlusCircle,
  MessageSquare
} from "lucide-react";

// Dummy Data for Students
const DUMMY_STUDENTS = [
  {
    _id: "STU001",
    name: "Alice Johnson",
    email: "alice.j@uni.edu",
    course: "B.Tech CS",
    semester: "Sem 3",
    attendance: 92,
    grade: "A",
    status: "Active",
  },
  {
    _id: "STU002",
    name: "Michael Chen",
    email: "m.chen@uni.edu",
    course: "B.Tech CS",
    semester: "Sem 3",
    attendance: 78,
    grade: "B+",
    status: "Active",
  },
  {
    _id: "STU003",
    name: "Sarah Williams",
    email: "sarah.w@uni.edu",
    course: "B.Sc IT",
    semester: "Sem 2",
    attendance: 45,
    grade: "C",
    status: "At Risk",
  },
  {
    _id: "STU004",
    name: "James Smith",
    email: "james.smith@uni.edu",
    course: "BBA",
    semester: "Sem 1",
    attendance: 88,
    grade: "A-",
    status: "Active",
  },
  {
    _id: "STU005",
    name: "Emily Davis",
    email: "emily.d@uni.edu",
    course: "B.Tech CS",
    semester: "Sem 4",
    attendance: 60,
    grade: "C+",
    status: "Warning",
  },
];

/* Reusable Stat Card */
const StudentStatCard = ({ icon: Icon, label, value, subtext, colorClass }) => (
  <div className="flex-1 bg-white border border-dashed border-gray-300 p-5 flex flex-col justify-between group hover:border-[#e2343c]/50 transition-all duration-300">
    <div className="flex justify-between items-start mb-2">
      <div className={`p-2.5 rounded-lg ${colorClass} bg-opacity-10`}>
        <Icon size={22} />
      </div>
      <span className="text-xs font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded border border-gray-200">
         {subtext}
      </span>
    </div>
    <div>
      <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</h3>
      <p className="text-sm font-medium text-slate-500 mt-1">{label}</p>
    </div>
  </div>
);

const InstructorStudents = () => {
  const [students] = useState(DUMMY_STUDENTS);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering Logic
  const filteredStudents = students.filter((student) => {
    const term = searchTerm.toLowerCase();
    return (
      student.name.toLowerCase().includes(term) ||
      student.email.toLowerCase().includes(term) ||
      student._id.toLowerCase().includes(term)
    );
  });

  // Calculate Avg Attendance
  const avgAttendance = Math.round(
    students.reduce((acc, curr) => acc + curr.attendance, 0) / students.length
  );

  // Helper for Status Color
  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-700 border-green-200";
      case "At Risk": return "bg-red-50 text-red-600 border-red-200";
      case "Warning": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  // Helper for Grade Color
  const getGradeColor = (grade) => {
    if (grade.startsWith("A")) return "text-green-600 bg-green-50 ring-green-600/20";
    if (grade.startsWith("B")) return "text-blue-600 bg-blue-50 ring-blue-600/20";
    return "text-orange-600 bg-orange-50 ring-orange-600/20";
  };

  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Enrolled Students
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Monitor student performance, attendance, and enrollment status.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="custom-button flex items-center gap-2">
                <Download size={18} /> Export List
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <StudentStatCard 
             icon={User} 
             label="Total Students" 
             value={students.length} 
             subtext="+12 this week"
             colorClass="text-white bg-[#e2343c]"
           />
           <StudentStatCard 
             icon={BarChart} 
             label="Avg. Attendance" 
             value={`${avgAttendance}%`} 
             subtext="Target: 75%"
             colorClass="text-white bg-blue-600"
           />
           <StudentStatCard 
             icon={GraduationCap} 
             label="Passing Rate" 
             value="88%" 
             subtext="Last Semester"
             colorClass="text-white bg-green-600"
           />
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 border border-dashed border-gray-300">
          <div className="relative flex-1 w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-sm leading-5 bg-slate-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#e2343c] focus:border-[#e2343c] sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search by Name, Email or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="custom-button2 flex items-center gap-2 h-10 px-6 w-full sm:w-auto justify-center">
            <Filter size={18} /> Advanced Filters
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-dashed border-gray-300">
          
          {filteredStudents.length > 0 ? (
            <div className="overflow-x-auto w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Student Name</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Course Info</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Attendance</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Grade</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student._id}
                      className="hover:bg-slate-50 transition duration-150 group"
                    >
                      {/* Name & Avatar */}
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm">
                            {student.name.charAt(0)}{student.name.split(" ")[1]?.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-[#e2343c] transition-colors">
                              {student.name}
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                               <span className="font-mono">{student._id}</span> • {student.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Course */}
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-700">{student.course}</span>
                            <span className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                <Calendar size={12} /> {student.semester}
                            </span>
                        </div>
                      </td>

                      {/* Attendance */}
                      <td className="px-6 py-5 whitespace-nowrap align-middle">
                        <div className="w-full max-w-[140px]">
                            <div className="flex justify-between text-xs mb-1 font-semibold text-slate-600">
                                <span>{student.attendance}%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                <div 
                                    className={`h-2 rounded-full ${student.attendance < 75 ? 'bg-red-500' : 'bg-[#e2343c]'}`} 
                                    style={{ width: `${student.attendance}%` }}
                                ></div>
                            </div>
                        </div>
                      </td>

                       {/* Grade */}
                       <td className="px-6 py-5 whitespace-nowrap">
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset ${getGradeColor(student.grade)}`}>
                            {student.grade}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusColor(student.status)}`}>
                            {student.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                            <button className="text-slate-400 hover:text-[#e2343c] p-2 hover:bg-red-50 rounded-full transition-colors" title="Message Student">
                                <MessageSquare size={18} />
                            </button>
                            <button className="text-slate-400 hover:text-[#e2343c] p-2 hover:bg-red-50 rounded-full transition-colors">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
              <div className="bg-slate-50 rounded-full p-6 mb-4 border border-dashed border-gray-300">
                <User className="h-10 w-10 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                No students found
              </h3>
              <p className="mt-2 text-sm text-slate-500 max-w-xs mx-auto">
                No results match "{searchTerm}". Try checking for typos or clear filters.
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-6 text-[#e2343c] font-medium hover:underline text-sm"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorStudents;