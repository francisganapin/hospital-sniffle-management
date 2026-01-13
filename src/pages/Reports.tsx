import { FaChartLine, FaUsers, FaDollarSign, FaTimesCircle, FaArrowUp, FaArrowDown, FaDownload, FaCalendarAlt } from "react-icons/fa";

function Reports() {
    const reports = [
        { id: 1, name: "Patient Visits", date: "Jan 14, 2026", value: 120, change: "+15%", isPositive: true, icon: FaUsers, color: "from-blue-500 to-blue-600" },
        { id: 2, name: "New Patients", date: "Jan 14, 2026", value: 35, change: "+8%", isPositive: true, icon: FaUsers, color: "from-emerald-500 to-emerald-600" },
        { id: 3, name: "Revenue Generated", date: "Jan 14, 2026", value: "$5,200", change: "+22%", isPositive: true, icon: FaDollarSign, color: "from-amber-500 to-amber-600" },
        { id: 4, name: "Cancelled Appointments", date: "Jan 14, 2026", value: 5, change: "-3", isPositive: true, icon: FaTimesCircle, color: "from-red-500 to-red-600" },
    ];

    const detailedReports = [
        { id: 1, report: "Patient Visits", date: "Jan 14, 2026", value: "120", status: "Completed", trend: "+15%" },
        { id: 2, report: "New Patients", date: "Jan 14, 2026", value: "35", status: "Completed", trend: "+8%" },
        { id: 3, report: "Revenue Generated", date: "Jan 14, 2026", value: "$5,200", status: "Completed", trend: "+22%" },
        { id: 4, report: "Cancelled Appointments", date: "Jan 14, 2026", value: "5", status: "Pending", trend: "-2%" },
        { id: 5, report: "Follow-up Visits", date: "Jan 13, 2026", value: "28", status: "Completed", trend: "+5%" },
        { id: 6, report: "Emergency Cases", date: "Jan 13, 2026", value: "12", status: "Completed", trend: "+3%" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed": return "bg-emerald-100 text-emerald-700";
            case "Pending": return "bg-amber-100 text-amber-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    // Simulated chart data
    const chartData = [40, 65, 45, 80, 55, 90, 75];
    const maxValue = Math.max(...chartData);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Reports</h1>
                    <p className="text-slate-500 mt-1">Analytics and performance insights</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-3 bg-white border border-slate-200 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                        <FaCalendarAlt />
                        Last 7 Days
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
                        <FaDownload />
                        Export
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {reports.map((report) => {
                    const Icon = report.icon;
                    return (
                        <div
                            key={report.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${report.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white text-xl" />
                                </div>
                                <div className={`flex items-center gap-1 text-sm font-medium ${report.isPositive ? "text-emerald-600" : "text-red-500"}`}>
                                    {report.isPositive ? <FaArrowUp className="text-xs" /> : <FaArrowDown className="text-xs" />}
                                    {report.change}
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">{report.name}</p>
                            <p className="text-2xl font-bold text-slate-800 mt-1">{report.value}</p>
                            <p className="text-slate-400 text-xs mt-2">{report.date}</p>
                        </div>
                    );
                })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">Weekly Overview</h2>
                            <p className="text-slate-500 text-sm">Patient visits this week</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaChartLine className="text-blue-500" />
                            <span className="text-sm font-medium text-slate-600">Trending Up</span>
                        </div>
                    </div>
                    {/* Simple Bar Chart */}
                    <div className="flex items-end justify-between h-48 px-4">
                        {chartData.map((value, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div
                                    className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                                    style={{ height: `${(value / maxValue) * 100}%` }}
                                ></div>
                                <span className="text-xs text-slate-400">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Side Stats */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Performance</h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600 text-sm">Patient Satisfaction</span>
                                <span className="text-slate-800 font-semibold">92%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600 text-sm">Appointment Rate</span>
                                <span className="text-slate-800 font-semibold">78%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-[78%] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600 text-sm">Revenue Target</span>
                                <span className="text-slate-800 font-semibold">85%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600 text-sm">Staff Efficiency</span>
                                <span className="text-slate-800 font-semibold">88%</span>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-[88%] bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Reports Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-800">Detailed Reports</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Report</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Value</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Trend</th>
                                <th className="py-4 px-6 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {detailedReports.map((report) => (
                                <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-slate-800">{report.report}</td>
                                    <td className="py-4 px-6 text-slate-600">{report.date}</td>
                                    <td className="py-4 px-6 font-semibold text-slate-800">{report.value}</td>
                                    <td className="py-4 px-6">
                                        <span className={`flex items-center gap-1 text-sm font-medium ${report.trend.startsWith('+') ? "text-emerald-600" : "text-red-500"}`}>
                                            {report.trend.startsWith('+') ? <FaArrowUp className="text-xs" /> : <FaArrowDown className="text-xs" />}
                                            {report.trend}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                                            {report.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Reports;
