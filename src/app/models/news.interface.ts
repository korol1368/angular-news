import {Tag} from './tag.interface';

export interface News {
  ID: string;
  title: string;
  description: string;
  date: Date;
  link: string;
  isTop: boolean;
  commentsCount: number;
  viewCount: number;
  tags: Tag[];
  image: string;
  imageSource: string;
  imageSmall: string;
  imageMiddle: string;
}
