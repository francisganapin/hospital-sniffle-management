import { FaPhone, FaEnvelope, FaStar, FaCalendarAlt } from "react-icons/fa";

function Doctors() {
    const doctors = [
        {
            id: 1,
            name: "Dr. John Doe",
            specialty: "Cardiologist",
            phone: "123-456-7890",
            email: "john.doe@clinic.com",
            patients: 45,
            rating: 4.9,
            available: true,
            avatar: "JD",
            color: "from-blue-500 to-indigo-600"
        },
        {
            id: 2,
            name: "Dr. Jane Smith",
            specialty: "Dermatologist",
            phone: "987-654-3210",
            email: "jane.smith@clinic.com",
            patients: 38,
            rating: 4.8,
            available: true,
            avatar: "JS",
            color: "from-pink-500 to-rose-600"
        },
        {
            id: 3,
            name: "Dr. Sam Wilson",
            specialty: "Pediatrician",
            phone: "555-123-4567",
            email: "sam.wilson@clinic.com",
            patients: 52,
            rating: 4.7,
            available: false,
            avatar: "SW",
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 4,
            name: "Dr. Emily Chen",
            specialty: "Neurologist",
            phone: "555-987-6543",
            email: "emily.chen@clinic.com",
            patients: 29,
            rating: 4.9,
            available: true,
            avatar: "EC",
            color: "from-purple-500 to-violet-600"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Doctors</h1>
                    <p className="text-slate-500 mt-1">Manage your medical staff</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                    + Add Doctor
                </button>
            </div>

            {/* Doctor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                    >
                        {/* Card Header with Gradient */}
                        <div className={`h-24 bg-gradient-to-br ${doctor.color} relative`}>
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${doctor.color} flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white`}>
                                    {doctor.avatar}
                                </div>
                            </div>
                            {/* Availability Badge */}
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${doctor.available ? "bg-emerald-500 text-white" : "bg-slate-400 text-white"}`}>
                                    {doctor.available ? "Available" : "Busy"}
                                </span>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="pt-14 pb-6 px-6 text-center">
                            <h3 className="text-lg font-bold text-slate-800">{doctor.name}</h3>
                            <p className="text-blue-600 font-medium text-sm mt-1">{doctor.specialty}</p>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-1 mt-3">
                                <FaStar className="text-amber-400" />
                                <span className="font-semibold text-slate-700">{doctor.rating}</span>
                                <span className="text-slate-400 text-sm">({doctor.patients} patients)</span>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-5 space-y-2">
                                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                                    <FaPhone className="text-blue-500" />
                                    <span>{doctor.phone}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                                    <FaEnvelope className="text-blue-500" />
                                    <span>{doctor.email}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex gap-2">
                                <button className="flex-1 py-2 px-4 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm">
                                    Profile
                                </button>
                                <button className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all text-sm flex items-center justify-center gap-2">
                                    <FaCalendarAlt />
                                    Book
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctors;
