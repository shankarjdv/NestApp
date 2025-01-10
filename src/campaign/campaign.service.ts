// campaign-management-app/src/campaign/campaign.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';
import { People } from './entities/people.entity';
import { Payment } from './entities/payment.entity';
import { CreateCampaignDto, AddPeopleDto, UpdatePaymentDto } from './dto/index';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign) private campaignRepo: Repository<Campaign>,
    @InjectRepository(People) private peopleRepo: Repository<People>,
    @InjectRepository(Payment) private paymentRepo: Repository<Payment>,
  ) {}

  createCampaign(createCampaignDto: CreateCampaignDto) {
    const campaign = this.campaignRepo.create(createCampaignDto);
    return this.campaignRepo.save(campaign);
  }

  deleteCampaign(id: number) {
    return this.campaignRepo.delete(id);
  }

  getAllCampaigns() {
    return this.campaignRepo.find({ relations: ['people', 'people.payments'] });
  }

  async addPeopleToCampaign(id: number, addPeopleDto: AddPeopleDto) {
    const campaign = await this.campaignRepo.findOneBy({ id });
    if (!campaign) throw new Error('Campaign not found');

    const people = addPeopleDto.people.map((person) => this.peopleRepo.create({
      ...person,
      campaign,
    }));

    return this.peopleRepo.save(people);
  }

  async updatePaymentStatus(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepo.findOneBy({ id });
    if (!payment) throw new Error('Payment not found');

    Object.assign(payment, updatePaymentDto);
    return this.paymentRepo.save(payment);
  }
}