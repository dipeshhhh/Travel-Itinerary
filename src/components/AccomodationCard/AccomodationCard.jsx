import "./AccomodationCard.css";

import StarIcon from "../../assets/icons/Star";
import ConfirmedIcon from "../../assets/icons/Confirm";
import PendingIcon from "../../assets/icons/Pending";
import { formatDateAndTime } from "../../utils/dateTimeFormat";

export default function AccomodationCard({
  name = "Name",
  imageURL = "",
  checkInDateTime = new Date("1111-11-1 11:11 am"),
  checkOutDateTime = new Date("1111-11-1 11:11 am"),
  nights = "n",
  status = "status",
  rating = "x",
  review = "review",
}) {
  return (
    <div className="accomodation-card">
      <div className="accomodation-card-image-section">
        {imageURL && <img className="accomodation-image" src={imageURL} />}
        <div className="accomodation-rating-card">
          <StarIcon classes="accomodation-rating-star" />
          &nbsp;
          {rating}
          &nbsp;
          {review}
        </div>
      </div>
      <div className="accomodation-card-text-section">
        <div className="accomodation-details">
          <header className="accomodation-name">{name}</header>
          <div className="accomodation-detail">
            <span className="accomodation-detail-label">Check in: </span>
            &nbsp;
            <span className="accomodation-detail-value">
              {formatDateAndTime(checkInDateTime).toLowerCase()}
            </span>
          </div>
          <div className="accomodation-detail">
            <span className="accomodation-detail-label">Check Out: </span>
            &nbsp;
            <span className="accomodation-detail-value">
              {formatDateAndTime(checkOutDateTime).toLowerCase()}
            </span>
          </div>
        </div>
        <div className="accomodation-card-text-bottom accomodation-detail-label">
          <span>
            {nights} {nights == "1" ? "Night" : "Nights"}
          </span>
          <span
            className={`accomodation-status accomodation-status-${status.toLowerCase() === "confirmed" ? "confirmed" : "pending"}`}
          >
            {status.toLowerCase() === "confirmed" ? (
              <ConfirmedIcon classes="accomodation-status-confirmed" />
            ) : (
              <PendingIcon classes="accomodation-status-pending" />
            )}
            &nbsp;
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
