export type DonationCategory =
  | 'clothes'
  | 'books'
  | 'furniture'
  | 'food'
  | 'etc';

export type DonationFilter = 'all' | DonationCategory;

export interface DonationItem {
  id: number;
  title: string;
  image_url: string;
  location: string;
  created_at: string;
  like_count: number;
  thumb_count: number;
}
