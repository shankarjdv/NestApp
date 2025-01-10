// campaign-management-app/src/campaign/campaign.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './entities/campaign.entity';
import { People } from './entities/people.entity';
import { Payment } from './entities/payment.entity';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign, People, Payment])],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}