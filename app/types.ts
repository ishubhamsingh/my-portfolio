export type Posts = Post[]

export type Post = {
    id: string;
    contentMd?: string,
    title: string;
    description: string;
    headerImage?: string;
    categories: string[];
    date: string;
    authorName: string;
    authorAvatar: string;
    published: boolean;
  };