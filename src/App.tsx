
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.tsx'
import Appointment from './pages/Appointment.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Doctors from './pages/Doctors.tsx'
import Patient from './pages/Patient.tsx'
import Reports from './pages/Reports.tsx'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '50px' }}> {/* so content is not under fixed navbar */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />

          <Route path="/doctor" element={<Doctors />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </>
  )
}

export default App
