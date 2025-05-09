import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './colors.css'
import './spacing.css'
import './fonts.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import OnBoarding from './pages/OnBoarding/OnBoarding.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/onboarding" element={<OnBoarding />} >
          <Route path="*" element={<OnBoarding />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
