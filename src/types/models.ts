export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  pages: string[];
}

export interface Profile {
  name: string;
}
