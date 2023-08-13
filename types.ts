export type Listing = {
  listing_url: string | null;
  name: string | null;
  beds: number | null;
  accommodates: number | null;
  images: imageObj | null;
};

export type imageObj = {
  picture_url: string | null;
};
