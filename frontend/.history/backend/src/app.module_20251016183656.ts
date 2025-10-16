import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionModule } from './submission/submission.module';

@Module({
  imports: [ConfigModule.forRoot(), SubmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
