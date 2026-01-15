import React, { useState } from "react";
import "../../../App.css"; 
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  User, 
  TrendingUp, 
  ArrowRight,
  FileText,
  AlertCircle
} from "lucide-react";

// Dummy Subject Data for Student
const STUDENT_SUBJECTS = [
  {
    id: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Robert Langdon",
    progress: 75,
    grade: "A",
    attendance: 92,
    nextClass: "Mon, 10:00 AM",
    status: "In Progress",
    assignmentsPending: 0
  },
  {
    id: "CS102",
    name: "Data Structures & Algorithms",
    instructor: "Prof. Alan Grant",
    progress: 45,
    grade: "B+",
    attendance: 85,
    nextClass: "Tue, 02:00 PM",
    status: "In Progress",
    assignmentsPending: 2
  },
  {
    id: "MATH201",
    name: "Discrete Mathematics",
    instructor: "Dr. Ellie Sattler",
    progress: 90,
    grade: "A-",
    attendance: 98,
    nextClass: "Wed, 11:30 AM",
    status: "Completed",
    assignmentsPending: 0
  },
  {
    id: "WEB101",
    name: "Web Development Fundamentals",
    instructor: "Ms. Emily Rose",
    progress: 30,
    grade: "B",
    attendance: 70,
    nextClass: "Thu, 09:00 AM",
    status: "In Progress",
    assignmentsPending: 1
  },
  {
    id: "ENG101",
    name: "Technical Communication",
    instructor: "Mr. Bruce Wayne",
    progress: 10,
    grade: "-",
    attendance: 100,
    nextClass: "Fri, 01:00 PM",
    status: "Just Started",
    assignmentsPending: 0
  }
];

/* Subject Card Component */
const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-white border border-dashed border-gray-300 p-6 flex flex-col h-full hover:border-[#e2343c] transition-colors group relative">
      
      {/* Pending Assignment Badge (Absolute) */}
      {subject.assignmentsPending > 0 && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold bg-red-50 text-[#e2343c] border border-red-100 px-2 py-1">
           <AlertCircle size={12} /> {subject.assignmentsPending} Due
        </div>
      )}

      {/* Header: Code */}
      <div className="mb-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1">
            {subject.id}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#e2343c] transition-colors line-clamp-2">
        {subject.name}
      </h3>

      {/* Instructor & Time */}
      <div className="space-y-2 mb-6 text-sm text-slate-600">
        <div className="flex items-center gap-2">
            <User size={14} className="text-slate-400" />
            <span>{subject.instructor}</span>
        </div>
        <div className="flex items-center gap-2">
            <Clock size={14} className="text-slate-400" />
            <span>Next: <span className="font-bold text-slate-800">{subject.nextClass}</span></span>
        </div>
      </div>

      <div className="mt-auto space-y-4">
          {/* Progress Section */}
          <div>
            <div className="flex justify-between items-end mb-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Progress</span>
                <span className="text-sm font-bold text-slate-900">{subject.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2">
                <div 
                    className="bg-[#e2343c] h-2" 
                    style={{ width: `${subject.progress}%` }}
                ></div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex border-t border-dashed border-gray-200 pt-4 gap-4">
              <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Grade</p>
                  <p className={`font-bold ${subject.grade === '-' ? 'text-slate-400' : 'text-green-600'}`}>
                      {subject.grade}
                  </p>
              </div>
              <div className="flex-1 border-l border-dashed border-gray-200 pl-4">
                   <p className="text-[10px] font-bold text-slate-400 uppercase">Attendance</p>
                   <p className={`font-bold ${subject.attendance < 75 ? 'text-red-500' : 'text-slate-900'}`}>
                      {subject.attendance}%
                  </p>
              </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-3 flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-bold hover:bg-[#e2343c] transition-colors">
              Continue Learning <ArrowRight size={16} />
          </button>
      </div>
    </div>
  );
};

const StudentSubjects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = STUDENT_SUBJECTS.filter(sub => 
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sub.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              My Courses
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Access your learning materials, assignments, and grades.
            </p>
          </div>
          
          {/* Quick Stats Summary */}
          <div className="flex gap-4">
              <div className="bg-white border border-dashed border-gray-300 p-3 flex flex-col justify-center min-w-[120px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Enrolled</span>
                  <span className="text-xl font-extrabold text-slate-900">{STUDENT_SUBJECTS.length}</span>
              </div>
              <div className="bg-white border border-dashed border-gray-300 p-3 flex flex-col justify-center min-w-[120px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Avg. Grade</span>
                  <span className="text-xl font-extrabold text-green-600">B+</span>
              </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border border-dashed border-gray-300 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
             <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search courses..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 focus:outline-none focus:border-[#e2343c] focus:ring-0 text-sm font-medium rounded-none transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
                 <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 text-sm font-bold text-slate-600 hover:text-[#e2343c] hover:border-[#e2343c] bg-white transition-colors rounded-none">
                    <Filter size={16} /> Status
                </button>
                 <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 text-sm font-bold text-slate-600 hover:text-[#e2343c] hover:border-[#e2343c] bg-white transition-colors rounded-none">
                    <TrendingUp size={16} /> Grades
                </button>
            </div>
        </div>

        {/* Subjects Grid */}
        {filteredSubjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-gray-300 bg-white">
                <div className="p-4 bg-slate-50 mb-3 text-slate-400">
                    <BookOpen size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No courses found</h3>
                <p className="text-slate-500 text-sm mt-1">You are not enrolled in any courses matching your search.</p>
                <button 
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-[#e2343c] font-bold text-sm hover:underline"
                >
                    Clear Search
                </button>
            </div>
        )}

      </div>
    </div>
  );
};

export default StudentSubjects;