export interface Comment {
  comment: string;
  userId: number;
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
