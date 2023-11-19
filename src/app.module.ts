import { Module } from '@nestjs/common';
import { ConfigModule } from '@/modules/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from '@/modules/article/article.module';
import { DATABASE_URI } from '@/constants/app_settings';

@Module({
  imports: [ConfigModule, MongooseModule.forRoot(DATABASE_URI), ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
