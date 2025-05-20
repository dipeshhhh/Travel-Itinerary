import "./UpcomingTripWidget.css";
import { formatDate } from "../../utils/dateTimeFormat";

import ArrowTopRightIcon from "../../assets/icons/ArrowTopRight";
import TimeIcon from "../../assets/icons/Time";
import GroupIcon from "../../assets/icons/Group";
import PlannerIcon from "../../assets/icons/Planner";

export default function UpcomingTripSection({
  // TODO: Default values here
  imageURL,
  location,
  startDate,
  endDate,
  duration,
  groupSize,
  activities,
}) {
  const tripInfo = [
    {
      icon: <TimeIcon classes="trip-info-icon" />,
      label: "Duration",
      value: duration || "Duration",
    },
    {
      icon: <GroupIcon classes="trip-info-icon" />,
      label: "Group Size",
      value: groupSize || "Group Size",
    },
    {
      icon: <PlannerIcon classes="trip-info-icon" />,
      label: "Activities",
      value: activities || "Activities",
    },
  ];

  return (
    <div className="upcoming-trip-widget">
      {[1, 2].map((imgNo) => (
        // first image is normal and second is blurred
        <div
          className={`upcoming-trip-${imgNo === 1 ? "image" : "blur"}`}
          style={{ backgroundImage: `url(${imageURL})` }}
        />
      ))}
      <div className="upcoming-trip-content">
        <header className="upcoming-trip-header-container">
          <div className="upcoming-trip-header">
            <div className="upcoming-trip-heading">
              {location || "Location"}
            </div>
            <div className="upcoming-trip-sub-heading">
              {startDate ? `${formatDate(startDate)}` : "Start Date"}
              &nbsp;-&nbsp;
              {endDate ? `${formatDate(endDate)}` : "End Date"}
            </div>
          </div>
          <a>
            <ArrowTopRightIcon classes="upcoming-trip-link-icon" />
          </a>
        </header>
        <div className="trip-info-item-container">
          {tripInfo.map((info) => (
            <TripInfo
              key={info.label}
              icon={info.icon}
              value={info.value}
              label={info.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TripInfo({ icon, value, label }) {
  return (
    <div className="trip-info-item">
      <span className="trip-info-icon-container">{icon || "O"}</span>
      <span className="trip-info-text">
        <p className="trip-info-value">{value || "Value"}</p>
        <p className="trip-info-label">{label || "Label"}</p>
      </span>
    </div>
  );
}
