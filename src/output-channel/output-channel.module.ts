import { forwardRef, Module } from '@nestjs/common';
import { OutputChannelService } from './output-channel.service';
import { FileSystemChannel } from './channels/file-system.channel';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { SlackController } from './slack.controller';
import { SlackChannel } from './channels/slack.channel';
import { SummaryModule } from 'src/summary/summary.module';

@Module({
  imports: [ConfigModule, HttpModule, forwardRef(() => SummaryModule)],
  controllers: [SlackController],
  providers: [OutputChannelService, FileSystemChannel, SlackChannel],
  exports: [OutputChannelService],
})
export class OutputChannelModule {}
