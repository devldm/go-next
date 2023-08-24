export type Listing = {
  ID: string;
  address: addressObj | null;
  listing_url: string | null;
  name: string | null;
  beds: number | null;
  accommodates: number | null;
  images: imageObj | null;
  review_scores: reviewObj | null;
  price: number | null;
  number_of_reviews: number | null;
};

export type imageObj = {
  picture_url: string | null;
};

export type addressObj = {
  street: string | null;
  country: string | null;
  location: locationObj | null;
};

type reviewObj = {
  review_scores_rating: number | null;
};

export type locationObj = {
  coordinates: number[] | null;
};
