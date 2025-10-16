import { Controller, Post, Body } from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  async submit(@Body() body: { email: string; phone: string }) {
    return this.submissionService.handleSubmission(body.email, body.phone);
  }
}
