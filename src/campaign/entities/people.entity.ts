// campaign-management-app/src/campaign/entities/people.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Campaign } from './campaign.entity';
import { Payment } from './payment.entity';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne(() => Campaign, (campaign) => campaign.people)
  campaign: Campaign;

  @OneToMany(() => Payment, (payment) => payment.people)
  payments: Payment[];
}