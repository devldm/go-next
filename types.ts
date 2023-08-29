export type Listing = {
  ID: string;
  address: addressObj | null;
  listing_url: string | null;
  name: string | null;
  beds: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  accommodates: number | null;
  images: imageObj | null;
  review_scores: reviewObj | null;
  price: number | null;
  number_of_reviews: number | null;
  reviews: reviewsObj[] | null;
  room_type: string | null;
  description: string | null;
  amenities: string[] | null;
  host: hostObj | null;
};

export type imageObj = {
  picture_url: string | null;
};

export type addressObj = {
  street: string | null;
  country: string | null;
  location: locationObj | null | undefined;
};

type reviewObj = {
  review_scores_rating: number | null;
};

export type locationObj = {
  coordinates: coordinates | null;
};

export type reviewsObj = {
  ID: string | null;
  comments: string | null;
  date: string | null;
  listing_id: string | null;
  reviewer_id: string | null;
  reviewer_name: string | null;
};

type hostObj = {
  host_name: string | null;
};

export type coordinates = number[];
