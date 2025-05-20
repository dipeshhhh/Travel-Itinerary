import { NavLink } from "react-router";
import "./App.css";

import onboardingImageLight from "./assets/images/onboarding-light.png";
import onboardingImageDark from "./assets/images/onboarding-dark.png";
import dashboardImageLight from "./assets/images/dashboard-light.png";
import dashboardImageDark from "./assets/images/dashboard-dark.png";

function App() {
  return (
    <main className="app-main">
      <section className="app-section">
        <header>
          <h1>Task 1: On-Boarding page</h1>
        </header>
        <NavLink
          to="/onboarding"
          className="onboarding-image-container task-image-container"
        >
          <picture className="task-image">
            <source
              srcSet={onboardingImageLight}
              media="(prefers-color-scheme: light)"
            />
            <source
              srcSet={onboardingImageDark}
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="task-image"
              src={onboardingImageLight}
              alt="Onboarding"
            />
          </picture>
        </NavLink>
      </section>
      <section className="app-section">
        <header>
          <h1>Task 2: Dashboard page</h1>
        </header>
        <NavLink
          to="/dashboard"
          className="dashboard-image-container task-image-container"
        >
          <picture className="task-image">
            <source
              srcSet={dashboardImageLight}
              media="(prefers-color-scheme: light)"
            />
            <source
              srcSet={dashboardImageDark}
              media="(prefers-color-scheme: dark)"
            />
            <img
              className="task-image"
              src={dashboardImageLight}
              alt="Onboarding"
            />
          </picture>
        </NavLink>
      </section>
    </main>
  );
}

export default App;
