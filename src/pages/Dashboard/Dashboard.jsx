import "./Dashboard.css";
import mockData from "../../data/mockData";
import Navbar from "../../components/Navbar/Navbar";

import UpcomingTripWidget from "../../components/UpcomingTripWidget/UpcomingTripWidget";
import FlightDetailsWidget from "../../components/FlightDetailsWidget/FlightDetailsWidget";
import AccomodationCard from "../../components/AccomodationCard/AccomodationCard";
import ActivitiesWidget from "../../components/ActivitiesWidget/ActivitiesWidget";
import GradiantBlobs from "../../components/GradiantBlobs/GradiantBlobs";

export default function Dashboard() {
  //! using name "data" since it is most common with API calls.
  const data = mockData;
  return (
    <main className="dashboard-main">
      <header className="dashboard-header">
        <div>
          <h2>Hello {data.user.username || "User"}</h2>
          <p className="body-text-1">Ready for the trip?</p>
        </div>
        <div className="user-avatar-container">
          {data.user.avatarURL ? (
            <img className="user-avatar-image" src={data.user.avatarURL} />
          ) : (
            <span className="user-avatar-from-initial">
              {data.user.username ? data.user.username[0] : "U"}
            </span>
          )}
        </div>
      </header>
      <section className="dashboard-section">
        <header className="dashboard-section-header">
          <h3>Your Upcoming Trip</h3>
        </header>
        <UpcomingTripWidget
          imageURL={data.upcomingTrip.imageURL}
          location={data.upcomingTrip.location}
          startDate={data.upcomingTrip.startDate}
          endDate={data.upcomingTrip.endDate}
          duration={data.upcomingTrip.duration}
          groupSize={data.upcomingTrip.groupSize}
          activities={data.upcomingTrip.activities}
        />
      </section>
      <section className="dashboard-section">
        <FlightDetailsWidget
          flightUrl={data.flightDetails.flightURL}
          dateTime={data.flightDetails.dateTime}
          from={data.flightDetails.from}
          fromCode={data.flightDetails.fromCode}
          to={data.flightDetails.to}
          toCode={data.flightDetails.toCode}
        />
      </section>
      <section className="dashboard-section">
        <header className="dashboard-section-header">
          <h3>Accomodation</h3>
          <a className="see-all-link">See all</a>
        </header>
        <div className="accomodation-cards-container">
          {data.accomodations.map((accomodation, i) => (
            <AccomodationCard
              key={i}
              imageURL={accomodation.imageURL}
              name={accomodation.name}
              checkInDateTime={accomodation.checkInDateTime}
              checkOutDateTime={accomodation.checkOutDateTime}
              nights={accomodation.nights}
              status={accomodation.status}
              rating={accomodation.rating}
              review={accomodation.review}
            />
          ))}
        </div>
      </section>
      <section className="dashboard-section">
        <header className="dashboard-section-header">
          <h3>Activities</h3>
          <a className="see-all-link">See all</a>
        </header>
        <ActivitiesWidget
          startDate={data.upcomingTrip.startDate}
          endDate={data.upcomingTrip.endDate}
          activities={data.activities}
        />
      </section>
      <Navbar />
      <GradiantBlobs />
    </main>
  );
}
