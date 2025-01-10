// campaign-management-app/src/campaign/campaign.controller.ts
import { Controller, Post, Delete, Get, Body, Param, Patch } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto, AddPeopleDto, UpdatePaymentDto } from './dto/index';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.createCampaign(createCampaignDto);
  }

  @Delete(':id')
  deleteCampaign(@Param('id') id: number) {
    return this.campaignService.deleteCampaign(id);
  }

  @Get()
  getAllCampaigns() {
    return this.campaignService.getAllCampaigns();
  }

  @Post(':id/people')
  addPeopleToCampaign(@Param('id') id: number, @Body() addPeopleDto: AddPeopleDto) {
    return this.campaignService.addPeopleToCampaign(id, addPeopleDto);
  }

  @Patch('payments/:id')
  updatePaymentStatus(@Param('id') id: number, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.campaignService.updatePaymentStatus(id, updatePaymentDto);
  }
}
