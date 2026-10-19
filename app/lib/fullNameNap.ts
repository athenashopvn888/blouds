/**
 * BLS01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "BLS01",
  "fullName": "Blouds Dispensary Weed Delivery",
  "street": "117 Queen St W",
  "city": "Brampton",
  "region": "ON",
  "postal": "L6Y 1M3",
  "phoneDisplay": "(437) 371-5377",
  "phoneTel": "tel:+14373715377",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ0UWP7dUVK4gRTZFasgAPDuk",
  "placeId": "ChIJ0UWP7dUVK4gRTZFasgAPDuk",
  "neighbourhood": "Downtown Brampton",
  "intersection": "",
  "transit": "Accessible by local Brampton Transit routes serving Downtown Brampton and the Peel Region.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
