import { InjectModel } from '@nestjs/mongoose';
import { Article } from '@/entities/article.entity';
import { Model } from 'mongoose';
import { CreateArticleDTO } from '@/repositories/article/article-repository.dto';

export interface IArticleRepository {
  createArticle(createArticleDTO: CreateArticleDTO): Promise<Article>;

  getArticleBySlug(slug: string): Promise<Article>;

  checkIfArticleExists?(slug: string): Promise<boolean>;
}

export class ArticleRepository implements IArticleRepository {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
  ) {}

  async createArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
    try {
      const article: boolean = await this.checkIfArticleExists(
        createArticleDTO.slug,
      );
      if (article) throw new Error('Article with this slug already exists');
      const newArticle = new this.articleModel(createArticleDTO);
      return await newArticle.save();
    } catch (e) {
      throw new Error(e);
    }
  }

  async getArticleBySlug(slug: string): Promise<Article> {
    try {
      return await this.articleModel.findOne({ slug: slug });
    } catch (e) {
      throw new Error(e);
    }
  }

  async checkIfArticleExists(slug: string): Promise<boolean> {
    try {
      return await this.articleModel.findOne({ slug: slug });
    } catch (e) {
      throw new Error(e);
    }
  }
}
