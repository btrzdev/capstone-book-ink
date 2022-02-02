export interface Comment {
  comment: string;
  name: string;
  userId: number;
  rate: number;
}

export interface User {
  email: string;
  name: string;
  img?: string;
  bio?: string;
  isTattooists: boolean;
  id: number;
  comments: Comment[];
}

export interface Patched {
  email: string;
  name: string;
}
