import { NavLink } from 'react-router';
import './App.css'

import onboardingImage from './assets/images/onboarding-dark.png';
import dashboardImage from './assets/images/dashboard-dark.png';

function App() {
  return (
    <main className="app-main">
      <section className="app-section">
        <header><h1>Task 1: On-Boarding page</h1></header>
        <NavLink to="/onboarding" className="onboarding-image-container task-image-container">
          <img className="task-image" src={onboardingImage} alt="Onboarding" />
        </NavLink>
      </section>
      <section className="app-section">
        <header><h1>Task 2: Dashboard page</h1></header>
        <NavLink to="/dashboard" className="dashboard-image-container task-image-container">
          <img className="task-image" src={dashboardImage} alt="Dashboard" />
        </NavLink>
      </section>
      {/* <OnBoarding /> */}
    </main>
  )
}

export default App
