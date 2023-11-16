import { Injectable } from '@nestjs/common';
import { EmailQueueService } from './email-queue/email-queue.service';
import { EmailWorkerService } from './email-worker/email-worker.service';

@Injectable()
export class EmailService {
  constructor(
    private readonly queue: EmailQueueService,
    private readonly worker: EmailWorkerService,
  ) {}

  send<T>(data: T) {
    return this.queue.enqueue(data);
  }
}
