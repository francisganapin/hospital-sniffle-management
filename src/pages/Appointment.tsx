import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaClock, FaUserMd, FaCalendarCheck, FaPlus } from "react-icons/fa";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Appointment() {
    const [date, setDate] = useState<Value>(new Date());

    const timeSlots = [
        { time: "09:00 AM", available: true },
        { time: "09:30 AM", available: false },
        { time: "10:00 AM", available: true },
        { time: "10:30 AM", available: true },
        { time: "11:00 AM", available: false },
        { time: "11:30 AM", available: true },
        { time: "02:00 PM", available: true },
        { time: "02:30 PM", available: false },
        { time: "03:00 PM", available: true },
        { time: "03:30 PM", available: true },
        { time: "04:00 PM", available: true },
        { time: "04:30 PM", available: false },
    ];

    const upcomingAppointments = [
        { id: 1, patient: "John Doe", doctor: "Dr. Jane Smith", date: "Jan 15, 2026", time: "10:00 AM", type: "Checkup" },
        { id: 2, patient: "Mary Johnson", doctor: "Dr. Sam Wilson", date: "Jan 15, 2026", time: "11:30 AM", type: "Follow-up" },
        { id: 3, patient: "Peter Parker", doctor: "Dr. John Doe", date: "Jan 16, 2026", time: "2:00 PM", type: "Consultation" },
    ];

    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Appointments</h1>
                    <p className="text-slate-500 mt-1">Schedule and manage appointments</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
                    <FaPlus />
                    New Appointment
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <FaCalendarCheck className="text-blue-500" />
                            Select Date
                        </h2>
                        <style>{`
                            .react-calendar {
                                width: 100%;
                                border: none;
                                font-family: inherit;
                                background: transparent;
                            }
                            .react-calendar__navigation {
                                margin-bottom: 1rem;
                            }
                            .react-calendar__navigation button {
                                font-size: 1rem;
                                font-weight: 600;
                                color: #1e293b;
                                min-width: 44px;
                                border-radius: 0.75rem;
                            }
                            .react-calendar__navigation button:hover {
                                background: #f1f5f9;
                            }
                            .react-calendar__month-view__weekdays {
                                font-size: 0.75rem;
                                font-weight: 600;
                                color: #64748b;
                                text-transform: uppercase;
                            }
                            .react-calendar__month-view__weekdays abbr {
                                text-decoration: none;
                            }
                            .react-calendar__tile {
                                padding: 1rem 0.5rem;
                                font-size: 0.875rem;
                                border-radius: 0.75rem;
                                color: #334155;
                            }
                            .react-calendar__tile:hover {
                                background: #f1f5f9;
                            }
                            .react-calendar__tile--active {
                                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
                                color: white !important;
                                font-weight: 600;
                            }
                            .react-calendar__tile--now {
                                background: #dbeafe;
                                color: #2563eb;
                                font-weight: 600;
                            }
                            .react-calendar__tile--now:hover {
                                background: #bfdbfe;
                            }
                        `}</style>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            className="w-full"
                        />
                    </div>

                    {/* Time Slots */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <FaClock className="text-blue-500" />
                            Available Time Slots
                        </h2>
                        <p className="text-slate-500 text-sm mb-4">
                            Selected: {date instanceof Date ? date.toDateString() : "No date selected"}
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                            {timeSlots.map((slot, index) => (
                                <button
                                    key={index}
                                    disabled={!slot.available}
                                    onClick={() => setSelectedTime(slot.time)}
                                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${!slot.available
                                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                                        : selectedTime === slot.time
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                                            : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                                        }`}
                                >
                                    {slot.time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Selected Appointment Summary */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                        <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-blue-100">Date</span>
                                <span className="font-medium">{date instanceof Date ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Not selected"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-blue-100">Time</span>
                                <span className="font-medium">{selectedTime || "Not selected"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-blue-100">Duration</span>
                                <span className="font-medium">30 mins</span>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                            Confirm Booking
                        </button>
                    </div>

                    {/* Upcoming Appointments */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <FaUserMd className="text-blue-500" />
                            Upcoming
                        </h3>
                        <div className="space-y-4">
                            {upcomingAppointments.map((apt) => (
                                <div key={apt.id} className="p-4 bg-slate-50 rounded-xl">
                                    <div className="flex items-start justify-between mb-2">
                                        <p className="font-semibold text-slate-800">{apt.patient}</p>
                                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                                            {apt.type}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500">{apt.doctor}</p>
                                    <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                                        <span>{apt.date}</span>
                                        <span>•</span>
                                        <span>{apt.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointment;