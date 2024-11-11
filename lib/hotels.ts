export interface Hotel {
  hotelId: string;
  name: string;
  city: string;
  url: string;
}

export const hotels: Hotel[] = [
  {
    hotelId: "10229987",
    name: "Almost Home Qasigiannguit",
    city: "Christianshaab / Qasigiannguit",
    url: "https://www.booking.com/hotel/gl/almost-home-qasigiannguit-christianshaab-47-qasigiannguit1.en.html?aid=2428994&no_rooms=1&group_adults=2"
  },
  {
    hotelId: "13028516",
    name: "AVANI Unnuisarfiit - Apartments",
    city: "Uummannaq",
    url: "https://www.booking.com/hotel/gl/avani-unnuisarfiit-apartments.en.html?aid=2428994&no_rooms=1&group_adults=2"
  },
  {
    hotelId: "10791511",
    name: "B&B Ire",
    city: "Ilulissat",
    url: "https://www.booking.com/hotel/gl/b-amp-b-ire.en.html?aid=2428994&no_rooms=1&group_adults=2"
  }
  // Add more hotels as needed
];