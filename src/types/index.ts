export interface Comment {
  comment: string;
  name: string;
  userId: number;
  rate: number;
}

export interface Event {
  title: string;
  allDay: boolean;
  start?: string;
}

export interface Sessions {
  allEvents: Event;
  accepted: boolean;
  pending: boolean;
  client: string;
  clientId: number;
  userId: number;
  messageRequest: string;
  messageResponse: string;
  id: number;
}

export interface User {
  email: string;
  name: string;
  img?: string;
  bio?: string;
  isTattooists: boolean;
  id: number;
  comments: Comment[];
  sessions?: Sessions[];
}

export interface Patched {
  email: string;
  name: string;
}
