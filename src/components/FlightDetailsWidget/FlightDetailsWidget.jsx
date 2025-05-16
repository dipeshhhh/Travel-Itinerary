import "./FlightDetailsWidget.css";
import { formatDateAndTime } from "../../utils/dateTimeFormat";
import ArrowRightIcon from "../../assets/icons/ArrowRight";

export default function FlightDetailsWidget({
  dateTime = new Date("1111-11-1 11:11 am"),
  from = "City, Country",
  fromCode = "FRM",
  to = "City, Country",
  toCode = "TO",
}) {
  return (
    <div className="flight-details-widget">
      <header className="flight-details-header-container">
        <span>
          <h3 className="flight-details-heading">Flight Details</h3>
          <p className="body-text-2">
            {formatDateAndTime(dateTime).toLowerCase()}
          </p>
        </span>
        <a className="see-all-link flight-details-link">See all</a>
      </header>
      <section className="flight-details-location-container">
        <FlightDetailsLocation locationCode={fromCode} location={from} />
        <ArrowRightIcon />
        <FlightDetailsLocation locationCode={toCode} location={to} />
      </section>
    </div>
  );
}

function FlightDetailsLocation({ locationCode, location }) {
  return (
    <div className="flight-details-location-item">
      <h3 className="flight-location-code flight-details-heading">
        {locationCode}
      </h3>
      <p className="flight-location-text body-text-3">{location}</p>
    </div>
  );
}
