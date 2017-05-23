export interface Post {
  subreddit?: string;
  preview?: PostPreview;
  thumbnail?: string;
  score?: number;
  created?: Date;
  url?: string;
  title?: string;
  numComments?: number;
  permalink?: string;
  author?: string;
}

export interface PostPreview {
  images: PreviewImage[];
}

export interface PreviewImage {
  source: {
    url: string;
    width: number,
    height: number,
  };
}
