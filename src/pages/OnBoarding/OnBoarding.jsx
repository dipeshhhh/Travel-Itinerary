import { useState } from "react";
import { TRAVEL_WITH_RADIO_GROUP_NAME } from "../../utils/constants";
import "./OnBoarding.css";

import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import DropDownInput from "../../components/FormComponents/DropDownInput/DropDownInput";
import RadioSelectInput from "../../components/FormComponents/RadioInput/RadioInput";
import TextInput from "../../components/FormComponents/TextInput/TextInput";

import LocationIcon from "../../assets/icons/Location";
import CalendarIcon from "../../assets/icons/Calendar";
import SoloIcon from "../../assets/icons/Solo";
import CoupleIcon from "../../assets/icons/Couple";
import FamilyIcon from "../../assets/icons/Family";
import FriendsIcon from "../../assets/icons/Friends";
import DropDownArrowIcon from "../../assets/icons/DropDownArrow";

export default function OnBoarding() {
  const [formInputs, setFormInputs] = useState({
    destination: "",
    duration: "",
    travelingWith: "",
  });

  const handleSubmit = (e) => {
    /**
     * Form submission logic here
     * Currently nothing
     */
    e.preventDefault();
    console.log(formInputs);
  };

  const handleDestinationInput = (e) => {
    setFormInputs({ ...formInputs, destination: e.target.value });
  };

  const handleDurationInput = (e) => {
    setFormInputs({ ...formInputs, duration: e.target.value });
  };

  const handleTravelingWithInput = (e) => {
    setFormInputs({ ...formInputs, travelingWith: e.target.value });
  };

  const travelingWithRadioButtons = [
    {
      text: "Solo",
      value: "solo",
      icon: <SoloIcon classes="radio-select-text" />,
    },
    { text: "Couple", value: "couple", icon: <CoupleIcon /> },
    { text: "Family", value: "family", icon: <FamilyIcon /> },
    { text: "Friends", value: "friends", icon: <FriendsIcon /> },
  ];

  return (
    <main className="onboarding-main">
      <header className="onboarding-header">
        <h2>Plan Your Journey, Your Way!</h2>
        <p className="body-text-2 onboarding-subheading">
          Let's create your personalised travel experience
        </p>
      </header>
      <form className="onboarding-form" onSubmit={handleSubmit}>
        <section className="form-section">
          <label>
            <h3>Where would you like to go?</h3>
          </label>
          <TextInput
            icon={<LocationIcon classes="onboard-input-icon-stroke" />}
            placeholder="Enter Destination"
            value={formInputs.destination}
            onChange={handleDestinationInput}
          />
        </section>
        <section className="form-section">
          <label>
            <h3>How long will you stay?</h3>
          </label>
          <DropDownInput
            icon={<CalendarIcon classes="onboard-input-icon-fill" />}
            dropDownIcon={
              <DropDownArrowIcon classes="onboard-input-icon-stroke" />
            }
            onChange={handleDurationInput}
          />
        </section>
        <section className="form-section">
          <label>
            <h3>Who are you traveling with?</h3>
          </label>
          <div className="onboarding-radio-group">
            {travelingWithRadioButtons.map((button) => (
              <RadioSelectInput
                key={button.value}
                icon={button.icon}
                text={button.text}
                value={button.value}
                name={TRAVEL_WITH_RADIO_GROUP_NAME}
                onChange={handleTravelingWithInput}
              />
            ))}
          </div>
        </section>
        <div className="form-empty-gap" />
        <section className="form-section continue-button-section">
          <PrimaryButton text="Continue" onClick={handleSubmit} type="submit" />
        </section>
      </form>
    </main>
  );
}
