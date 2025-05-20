import { getCloudinaryImageURL } from "../utils/cloudinary";

const avatarImage = getCloudinaryImageURL({
  publicId: "v1747724811/avatar_s7abql.png",
  height: 38,
  width: 38,
});

const tokyoImage = getCloudinaryImageURL({
  publicId: "v1747724819/tokyo_imqvdi.png",
});

const shinagawaPrinceHotelImage = getCloudinaryImageURL({
  publicId: "v1747724813/shinagawa_xvt54m.png",
});
const mercureTokyoHotelImage = getCloudinaryImageURL({
  publicId: "v1747724812/mercure_mbw4ea.png",
});

const sensoJiImage = getCloudinaryImageURL({
  publicId: "v1747724812/senso_ji_temple_c4ssdp.png",
});
const tokyoSkyTreeImage = getCloudinaryImageURL({
  publicId: "v1747724815/tokyo_sky_tree_pip8oa.png",
});
const kimonoWearingImage = getCloudinaryImageURL({
  publicId: "v1747724818/kimono_t2iuei.png",
});

const mockData = {
  user: {
    username: "Chhavi",
    avatarURL: avatarImage,
  },
  upcomingTrip: {
    imageURL: tokyoImage,
    location: "Tokyo",
    startDate: new Date("2025-01-27"),
    endDate: new Date("2025-02-02"),
    duration: "8 Days",
    groupSize: "4 (2M,2F)",
    activities: 14,
  },
  flightDetails: {
    flightURL: "",
    dateTime: new Date("2025-01-26 10:50 am"),
    from: "Delhi, India",
    fromCode: "DEL",
    to: "Narita, Tokyo",
    toCode: "NRT",
  },
  accomodations: [
    {
      imageURL: shinagawaPrinceHotelImage,
      name: "Shinagawa Prince Hotel",
      checkInDateTime: new Date("2025-01-26 11:15 pm"),
      checkOutDateTime: new Date("2025-01-28 11:15 am"),
      nights: "2",
      status: "confirmed",
      rating: "4.0",
      review: "Very Good",
    },
    {
      imageURL: mercureTokyoHotelImage,
      name: "Mercure Tokyo Hotel",
      checkInDateTime: new Date("2025-01-28 6:00 pm"),
      checkOutDateTime: new Date("2025-01-30 11:15 am"),
      nights: "2",
      status: "pending",
      rating: "4.1",
      review: "Very Good",
    },
    {
      imageURL: mercureTokyoHotelImage,
      name: "Mercure Tokyo Hotel",
      checkInDateTime: new Date("2025-01-29 6:00 pm"),
      checkOutDateTime: new Date("2025-01-30 11:15 am"),
      nights: "2",
      status: "pending",
      rating: "4.1",
      review: "Very Good",
    },
  ],
  activities: [
    {
      day: 1,
      imageURL: sensoJiImage,
      dateTime: new Date("2025-01-27 8:15 am"),
      name: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
      timing: "8:15 am Morning",
      duration: "3 hours",
      pickUp: "From Hotel",
    },
    {
      day: 1,
      imageURL: tokyoSkyTreeImage,
      dateTime: new Date("2025-01-27 1:00 pm"),
      name: "Tokyo Sky Tree",
      timing: "1:00 pm Afternoon",
      duration: "3 hours",
      pickUp: "From Nakamise Street",
    },
    {
      day: 1,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-27 8:00 pm"),
      name: "Kimono Wearing",
      timing: "Anytime before 8:00pm",
      duration: "1-2 hours",
      pickUp: "From Hotel",
    },
    {
      day: 2,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-28 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 2,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-28 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 3,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-29 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 3,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-29 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 4,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-30 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 4,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-30 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 5,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-31 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 5,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-01-31 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 6,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-02-01 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 6,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-02-01 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
    {
      day: 7,
      imageURL: kimonoWearingImage,
      dateTime: new Date("2025-02-02 5:00 pm"),
      name: "Some Activity",
      timing: "5:00pm Evening",
      duration: "Some hours",
      pickUp: "From Somewhere",
    },
  ],
};

export default mockData;
