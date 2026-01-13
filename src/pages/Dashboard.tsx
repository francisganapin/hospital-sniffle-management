import { FaUserInjured, FaCalendarCheck, FaUserMd, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";

function Dashboard() {
    const stats = [
        { id: 1, title: "Total Patients", value: 120, icon: FaUserInjured, change: "+12%", isPositive: true, color: "from-blue-500 to-blue-600" },
        { id: 2, title: "Appointments Today", value: 35, icon: FaCalendarCheck, change: "+8%", isPositive: true, color: "from-emerald-500 to-emerald-600" },
        { id: 3, title: "Doctors Available", value: 8, icon: FaUserMd, change: "-2", isPositive: false, color: "from-purple-500 to-purple-600" },
        { id: 4, title: "Revenue", value: "$5,200", icon: FaDollarSign, change: "+18%", isPositive: true, color: "from-amber-500 to-amber-600" },
    ];

    const appointments = [
        { id: 1, patient: "John Doe", doctor: "Dr. Jane Smith", date: "Jan 15, 2026", time: "10:00 AM", status: "Confirmed", avatar: "JD" },
        { id: 2, patient: "Mary Johnson", doctor: "Dr. Sam Wilson", date: "Jan 15, 2026", time: "11:30 AM", status: "Pending", avatar: "MJ" },
        { id: 3, patient: "Peter Parker", doctor: "Dr. John Doe", date: "Jan 16, 2026", time: "2:00 PM", status: "Confirmed", avatar: "PP" },
        { id: 4, patient: "Sarah Connor", doctor: "Dr. Jane Smith", date: "Jan 16, 2026", time: "3:30 PM", status: "Cancelled", avatar: "SC" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Confirmed": return "bg-emerald-100 text-emerald-700";
            case "Pending": return "bg-amber-100 text-amber-700";
            case "Cancelled": return "bg-red-100 text-red-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-slate-500 mt-1">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white text-xl" />
                                </div>
                                <div className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? "text-emerald-600" : "text-red-500"}`}>
                                    {stat.isPositive ? <FaArrowUp className="text-xs" /> : <FaArrowDown className="text-xs" />}
                                    {stat.change}
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
                            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
                        </div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Appointments Table */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-800">Upcoming Appointments</h2>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                                View All →
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient</th>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Doctor</th>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Schedule</th>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {appointments.map((apt) => (
                                    <tr key={apt.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                                                    {apt.avatar}
                                                </div>
                                                <span className="font-medium text-slate-700">{apt.patient}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-slate-600">{apt.doctor}</td>
                                        <td className="py-4 px-6">
                                            <div className="text-slate-700 font-medium">{apt.date}</div>
                                            <div className="text-slate-400 text-sm">{apt.time}</div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(apt.status)}`}>
                                                {apt.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>
                    <div className="space-y-4">
                        <button className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                            + New Appointment
                        </button>
                        <button className="w-full p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40">
                            + Add Patient
                        </button>
                        <button className="w-full p-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-medium hover:border-slate-300 hover:bg-slate-50 transition-all">
                            Generate Report
                        </button>
                    </div>

                    {/* Activity Feed */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500"></div>
                                <div>
                                    <p className="text-sm text-slate-700">New patient registered</p>
                                    <p className="text-xs text-slate-400">2 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                                <div>
                                    <p className="text-sm text-slate-700">Appointment confirmed</p>
                                    <p className="text-xs text-slate-400">15 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
                                <div>
                                    <p className="text-sm text-slate-700">Dr. Smith updated schedule</p>
                                    <p className="text-xs text-slate-400">1 hour ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
