import { useState } from "react";
import "./ActivitiesWidget.css";
import {
  formatDate,
  getDateRange,
  monthMap,
  dayMap,
} from "../../utils/dateTimeFormat";

import HikingIcon from "../../assets/icons/Hiking";

export default function ActivitiesWidget({
  startDate = new Date("1111-11-1 11:11 am"),
  endDate = new Date("1111-11-2 11:11 am"),
  activities = [],
}) {
  const [selectedDate, setSelectedDate] = useState({
    date: startDate,
    day: 1,
  });

  const handleDateChange = (newDate, newDay) => {
    setSelectedDate({ date: newDate, day: newDay });
  };

  const currentDayActivities = activities
    .filter((activity) => activity.day === selectedDate.day)
    .sort((a, b) => a.dateTime - b.dateTime);

  const tripDates = getDateRange(startDate, endDate); // index-1 = day number (since it is sorted)

  return (
    <div className="activity-widget">
      <div className="activity-calendar">
        <div className="ac-header">
          <span className="ac-header-item primary-item">Day Plan</span>
          <span className="ac-header-item secondary-item">
            {activities.length}
            &nbsp;
            {activities.length === 1 ? "Activity" : "Activities"}
          </span>
        </div>
        <div className="ac-date-item-container">
          {tripDates.map((date, i) => (
            <DateItem
              key={date}
              date={date}
              isFirstDate={i === 0 || date.getDate() === 1}
              isSelectedDate={selectedDate.day === i + 1}
              onClick={() => handleDateChange(date, i + 1)}
            />
          ))}
        </div>
      </div>
      <div className="activity-day-info-container">
        <span className="ad-day-date">
          <span>Day {selectedDate.day}</span>
          <span>{formatDate(selectedDate.date)}</span>
        </span>
        <span className="ad-activities">
          <HikingIcon classes="primary-fill" />
          &nbsp;
          {currentDayActivities.length}
          &nbsp;
          {currentDayActivities.length === 1 ? "Activity" : "Activities"}
        </span>
      </div>
      <div className="activity-item-container">
        {currentDayActivities.map((activity, i) => (
          <ActivityItem
            key={i}
            imageURL={activity.imageURL}
            name={activity.name}
            timing={activity.timing}
            duration={activity.duration}
            pickUp={activity.pickUp}
          />
        ))}
      </div>
    </div>
  );
}

function DateItem({ date, isFirstDate, isSelectedDate, onClick }) {
  return (
    <div
      className={`ac-date-item ${isSelectedDate && "selected"}`}
      onClick={onClick}
    >
      {isFirstDate && (
        <span className={`ac-date-item-month ${isSelectedDate && "selected"}`}>
          {monthMap[date.getMonth()].slice(0, 3).toUpperCase()}
        </span>
      )}
      <span
        className={`ac-date-item-day-date-container ${isSelectedDate && "selected"} ${isFirstDate && "first-date"}`}
      >
        <div className="ac-date-item-day">
          {dayMap[date.getDay()].slice(0, 3).toUpperCase()}
        </div>
        <div className="ac-date-item-date">{date.getDate()}</div>
      </span>
    </div>
  );
}

function ActivityItem({
  imageURL = "",
  name = "name",
  timing = "timing",
  duration = "duration",
  pickUp = "pickUp",
}) {
  return (
    <div className="activity-item">
      <div
        className="activity-item-image-section"
        style={{
          backgroundImage: `url('${imageURL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Using background image instead of <img /> because of size property
          can't dynamically set image height and widgth without affecting aspect ratio, background image's size and position proerty helps in this situation.
         */}
        {/* {imageURL && <img className="activity-item-image" src={imageURL} />} */}
      </div>
      <div className="activity-item-text-section">
        <header className="activity-item-name">{name}</header>
        <div className="activity-details-container">
          <div className="activity-detail">
            <span className="activity-detail-label">Timing:&nbsp;</span>
            <span className="activity-detail-value">{timing}</span>
          </div>
          <div className="activity-detail">
            <span className="activity-detail-label">Duration:&nbsp;</span>
            <span className="activity-detail-value">{duration}</span>
          </div>
          <div className="activity-detail">
            <span className="activity-detail-label">Pick up:&nbsp;</span>
            <span className="activity-detail-value">{pickUp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
