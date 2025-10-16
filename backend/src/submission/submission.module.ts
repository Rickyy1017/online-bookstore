import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubmissionController } from './submission.controller';
import { SubmissionService } from './submission.service';

@Module({
  imports: [ConfigModule],
  controllers: [SubmissionController],
  providers: [SubmissionService],
})
export class SubmissionModule {}
