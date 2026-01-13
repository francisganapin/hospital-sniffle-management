import { useState } from "react";
import { FaSearch, FaFilter, FaEllipsisV, FaPhone, FaEnvelope } from "react-icons/fa";

function Patient() {
    const [searchTerm, setSearchTerm] = useState("");

    const patients = [
        { id: 1, name: "John Doe", age: 35, gender: "Male", phone: "123-456-7890", email: "john@email.com", lastVisit: "Jan 10, 2026", status: "Active", avatar: "JD", bloodType: "A+" },
        { id: 2, name: "Mary Johnson", age: 28, gender: "Female", phone: "987-654-3210", email: "mary@email.com", lastVisit: "Jan 12, 2026", status: "Active", avatar: "MJ", bloodType: "B+" },
        { id: 3, name: "Peter Parker", age: 22, gender: "Male", phone: "555-123-4567", email: "peter@email.com", lastVisit: "Jan 8, 2026", status: "Pending", avatar: "PP", bloodType: "O-" },
        { id: 4, name: "Sarah Connor", age: 40, gender: "Female", phone: "222-333-4444", email: "sarah@email.com", lastVisit: "Jan 5, 2026", status: "Active", avatar: "SC", bloodType: "AB+" },
        { id: 5, name: "Bruce Wayne", age: 38, gender: "Male", phone: "555-888-9999", email: "bruce@email.com", lastVisit: "Dec 28, 2025", status: "Inactive", avatar: "BW", bloodType: "O+" },
    ];

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-emerald-100 text-emerald-700";
            case "Pending": return "bg-amber-100 text-amber-700";
            case "Inactive": return "bg-slate-100 text-slate-500";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    const getGenderColor = (gender: string) => {
        return gender === "Male" ? "from-blue-500 to-indigo-600" : "from-pink-500 to-rose-600";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Patients</h1>
                    <p className="text-slate-500 mt-1">Manage and view all patient records</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search Bar */}
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search patients..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <button className="px-4 py-3 bg-white border border-slate-200 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        <FaFilter />
                        Filter
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25">
                        + Add Patient
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <p className="text-slate-500 text-sm">Total Patients</p>
                    <p className="text-2xl font-bold text-slate-800">{patients.length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <p className="text-slate-500 text-sm">Active</p>
                    <p className="text-2xl font-bold text-emerald-600">{patients.filter(p => p.status === "Active").length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <p className="text-slate-500 text-sm">Pending</p>
                    <p className="text-2xl font-bold text-amber-600">{patients.filter(p => p.status === "Pending").length}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <p className="text-slate-500 text-sm">Inactive</p>
                    <p className="text-2xl font-bold text-slate-400">{patients.filter(p => p.status === "Inactive").length}</p>
                </div>
            </div>

            {/* Patient Cards / Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Details</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Visit</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredPatients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGenderColor(patient.gender)} flex items-center justify-center text-white font-semibold shadow-lg`}>
                                                {patient.avatar}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800">{patient.name}</p>
                                                <p className="text-sm text-slate-400">ID: #{patient.id.toString().padStart(4, '0')}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                <FaPhone className="text-blue-500 text-xs" />
                                                {patient.phone}
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                <FaEnvelope className="text-blue-500 text-xs" />
                                                {patient.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="space-y-1">
                                            <p className="text-slate-700">{patient.age} years, {patient.gender}</p>
                                            <p className="text-sm">
                                                <span className="px-2 py-0.5 bg-red-50 text-red-600 rounded font-medium text-xs">
                                                    {patient.bloodType}
                                                </span>
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-slate-600">{patient.lastVisit}</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(patient.status)}`}>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                            <FaEllipsisV className="text-slate-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-sm text-slate-500">Showing {filteredPatients.length} of {patients.length} patients</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">Previous</button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">1</button>
                        <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">2</button>
                        <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Patient;
