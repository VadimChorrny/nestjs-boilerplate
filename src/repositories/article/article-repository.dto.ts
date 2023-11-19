import { IArticle } from '@/entities/article.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export interface IArticleCreateDTO extends IArticle {
  title: string;
  excerpt: string;
  slug: string;
  thumbnail: string;
  content: string;
}

export class CreateArticleDTO implements IArticleCreateDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  excerpt: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
