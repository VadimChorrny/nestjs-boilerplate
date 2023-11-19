import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from '@/entities/article.entity';
import { ArticleController } from '@/modules/article/article.controller';
import { ArticleService } from '@/modules/article/article.service';
import { ArticleRepository } from '@/repositories/article/article.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRepository],
  exports: [ArticleService, ArticleRepository],
})
export class ArticleModule {}
