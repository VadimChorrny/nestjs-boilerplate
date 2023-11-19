import { Injectable } from '@nestjs/common';
import {
  ArticleRepository,
  IArticleRepository,
} from '@/repositories/article/article.repository';
import { CreateArticleDTO } from '@/repositories/article/article-repository.dto';
import { Article } from '@/entities/article.entity';

export interface IArticleService extends IArticleRepository {
  createArticle(createArticleDTO: CreateArticleDTO): Promise<Article>;

  getArticleBySlug(slug: string): Promise<Article>;
}

@Injectable()
export class ArticleService implements IArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async createArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
    return await this.articleRepository.createArticle(createArticleDTO);
  }

  async getArticleBySlug(slug: string): Promise<Article> {
    return await this.articleRepository.getArticleBySlug(slug);
  }
}
