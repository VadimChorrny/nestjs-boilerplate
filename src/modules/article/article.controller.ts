import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ArticleService } from '@/modules/article/article.service';
import { CreateArticleDTO } from '@/repositories/article/article-repository.dto';
import { Response } from 'express';

@Controller('article')
export class ArticleController {
  constructor(
    @InjectConnection() private readonly mongoConnection: Connection,
    private articleService: ArticleService,
  ) {}

  @Post('/create-article')
  async createArticle(
    @Body() createArticleDTO: CreateArticleDTO,
    @Res() res: Response,
  ) {
    try {
      console.log('createArticleDTO', createArticleDTO);
      const newArticle =
        await this.articleService.createArticle(createArticleDTO);
      if (!newArticle) {
        return res.status(HttpStatus.BAD_REQUEST).send({
          message: 'Article already exists',
        });
      }
      return res.status(HttpStatus.CREATED).send(newArticle);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        message: error.message,
      });
    }
  }

  @Get('/get-article/:slug')
  async getArticleBySlug(@Res() res: Response, slug: string) {
    try {
      const article = await this.articleService.getArticleBySlug(slug);
      if (!article) {
        return res.status(HttpStatus.BAD_REQUEST).send({
          message: 'Article not found',
        });
      }
      return res.status(HttpStatus.OK).send(article);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        message: error.message,
      });
    }
  }
}
