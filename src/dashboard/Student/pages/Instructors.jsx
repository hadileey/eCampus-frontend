import React, { useState } from "react";
import "../../../App.css"; 
import { 
  Search, 
  Filter, 
  Mail, 
  Calendar, 
  BookOpen, 
  Phone, 
  MoreHorizontal,
  Briefcase,
  Award
} from "lucide-react";

// Dummy Instructor Data
const DUMMY_INSTRUCTORS = [
  {
    id: 1,
    name: "Dr. Robert Langdon",
    department: "Computer Science",
    specialization: "Algorithms & AI",
    email: "r.langdon@uni.edu",
    subjects: ["Data Structures", "Artificial Intelligence"],
    status: "Available",
    initials: "RL"
  },
  {
    id: 2,
    name: "Prof. Sarah Connor",
    department: "Information Technology",
    specialization: "Cybersecurity",
    email: "s.connor@uni.edu",
    subjects: ["Network Security", "Ethical Hacking"],
    status: "In Class",
    initials: "SC"
  },
  {
    id: 3,
    name: "Dr. Alan Grant",
    department: "Data Science",
    specialization: "Big Data Analytics",
    email: "a.grant@uni.edu",
    subjects: ["Database Management", "Data Mining"],
    status: "Away",
    initials: "AG"
  },
  {
    id: 4,
    name: "Ms. Emily Rose",
    department: "Business Admin",
    specialization: "Digital Marketing",
    email: "e.rose@uni.edu",
    subjects: ["Marketing 101", "Consumer Behavior"],
    status: "Available",
    initials: "ER"
  },
  {
    id: 5,
    name: "Mr. Bruce Wayne",
    department: "Engineering",
    specialization: "Robotics",
    email: "b.wayne@uni.edu",
    subjects: ["Embedded Systems", "Circuit Theory"],
    status: "Busy",
    initials: "BW"
  },
  {
    id: 6,
    name: "Dr. Ellie Sattler",
    department: "Computer Science",
    specialization: "Software Eng.",
    email: "e.sattler@uni.edu",
    subjects: ["Software Architecture", "Agile Methods"],
    status: "Available",
    initials: "ES"
  },
];

/* Reusable Instructor Card */
const InstructorCard = ({ instructor }) => (
  <div className="bg-white border border-dashed border-gray-300 p-6 flex flex-col h-full hover:border-[#e2343c] transition-colors group">
    
    {/* Header: Avatar & Status */}
    <div className="flex justify-between items-start mb-4">
      <div className="w-16 h-16 bg-slate-100 border border-gray-200 flex items-center justify-center text-xl font-bold text-slate-500 group-hover:bg-[#e2343c] group-hover:text-white transition-colors">
        {instructor.initials}
      </div>
      <div className={`px-2 py-1 text-[10px] uppercase font-bold border ${
        instructor.status === "Available" ? "bg-green-50 text-green-700 border-green-200" :
        instructor.status === "In Class" ? "bg-blue-50 text-blue-700 border-blue-200" :
        "bg-gray-50 text-gray-500 border-gray-200"
      }`}>
        {instructor.status}
      </div>
    </div>

    {/* Info */}
    <div className="mb-6 flex-1">
      <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-1">
        {instructor.name}
      </h3>
      <p className="text-sm font-bold text-[#e2343c] mb-3 flex items-center gap-1">
        <Briefcase size={14} /> {instructor.department}
      </p>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
           <Award size={14} className="text-slate-400" />
           <span>{instructor.specialization}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
           <Mail size={14} className="text-slate-400" />
           <span>{instructor.email}</span>
        </div>
      </div>

      {/* Subjects Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {instructor.subjects.map((sub, index) => (
            <span key={index} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-50 border border-gray-200 px-2 py-1">
                {sub}
            </span>
        ))}
      </div>
    </div>

    {/* Footer Actions */}
    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dashed border-gray-200">
      <button className="flex items-center justify-center gap-2 py-2 text-sm font-bold text-slate-600 border border-gray-300 hover:border-slate-800 hover:text-slate-900 bg-white transition-colors">
        <Mail size={16} /> Message
      </button>
      <button className="flex items-center justify-center gap-2 py-2 text-sm font-bold text-white bg-slate-800 hover:bg-[#e2343c] transition-colors border border-transparent">
        <Calendar size={16} /> Schedule
      </button>
    </div>
  </div>
);

const StudentInstructors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInstructors = DUMMY_INSTRUCTORS.filter(inst => 
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen ml-70 bg-slate-50/30 p-6 md:p-2 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Faculty Directory
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Find and connect with your course instructors.
            </p>
          </div>
          
          <div className="flex gap-3">
             <button className="custom-button2 flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 hover:border-[#e2343c] rounded-none">
                <BookOpen size={18} /> Department Guide
             </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-dashed border-gray-300 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
             <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search by name or department..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 focus:outline-none focus:border-[#e2343c] focus:ring-0 text-sm font-medium rounded-none transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 text-sm font-bold text-slate-600 hover:text-[#e2343c] hover:border-[#e2343c] bg-white transition-colors rounded-none">
                    <Filter size={16} /> Filter
                </button>
                <div className="border-l border-gray-200 mx-1 hidden sm:block"></div>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors rounded-none">
                     Sort by Name
                </button>
            </div>
        </div>

        {/* Instructors Grid */}
        {filteredInstructors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInstructors.map((instructor) => (
                    <InstructorCard key={instructor.id} instructor={instructor} />
                ))}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-gray-300 bg-white">
                <div className="p-4 bg-slate-50 mb-3 text-slate-400">
                    <Search size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No instructors found</h3>
                <p className="text-slate-500 text-sm mt-1">Try adjusting your search terms.</p>
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

export default StudentInstructors;