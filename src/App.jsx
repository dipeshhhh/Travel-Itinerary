import { NavLink } from 'react-router';
import './App.css'

function App() {
  return (
    <main className="app-main">
      <section className="app-section">
        <header><h1>Task 1: On-Boarding page</h1></header>
        <NavLink to="/onboarding" className="onboarding-image-container task-image-container">
          <img className="task-image" src="./src/assets/images/onboarding-dark.png" alt="Onboarding" />
        </NavLink>
      </section>
      <section className="app-section">
        <header><h1>Task 2: Dashboard page</h1></header>
        <NavLink to="/dashboard" className="dashboard-image-container task-image-container">
          <img className="task-image" src="./src/assets/images/dashboard-dark.png" alt="Dashboard" />
        </NavLink>
      </section>
      {/* <OnBoarding /> */}
    </main>
  )
}

export default App
