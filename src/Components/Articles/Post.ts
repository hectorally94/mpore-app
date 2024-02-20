export interface Post {
    typeCategory: string;
    id: number;
    date: string;
    title: string;
    content: string;
    paid: boolean; // New property to indicate if the article requires payment
  }
  