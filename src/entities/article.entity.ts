import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface IArticle {
  _id?: string;

  title: string;
  excerpt: string;
  slug: string;
  thumbnail: string;
  content: string;

  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

@Schema()
export class Article extends Document implements IArticle {
  @Prop({ required: true, message: 'Title is required!' })
  title: string;

  @Prop({ required: true, message: 'Excerpt is required!' })
  excerpt: string;

  @Prop({ required: true, message: 'Slug is required!' })
  slug: string;

  @Prop({ required: true, message: 'Content is required!' })
  thumbnail: string;

  @Prop({ required: true, message: 'Content is required!' })
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
