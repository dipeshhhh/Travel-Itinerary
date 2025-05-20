import { NavLink } from "react-router";
import "./App.css";
import { getCloudinaryImageURL } from "./utils/cloudinary";

function App() {
  const imageOptions = {
    // height: "600", // in px
  };
  const onboardingImageLight = getCloudinaryImageURL({
    publicId: "v1747724812/onboarding-light_qqq6a7.png",
    ...imageOptions,
  });
  const onboardingImageDark = getCloudinaryImageURL({
    publicId: "v1747724813/onboarding-dark_ini57n.png",
    ...imageOptions,
  });
  const dashboardImageLight = getCloudinaryImageURL({
    publicId: "v1747724812/dashboard-light_jfimwo.png",
    ...imageOptions,
  });
  const dashboardImageDark = getCloudinaryImageURL({
    publicId: "v1747724812/dashboard-dark_aqoutb.png",
    ...imageOptions,
  });
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
