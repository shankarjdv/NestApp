// campaign-management-app/src/campaign/entities/payment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { People } from './people.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  dueDate: Date;

  @ManyToOne(() => People, (people) => people.payments)
  people: People;
}