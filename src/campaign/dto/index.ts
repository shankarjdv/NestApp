// campaign-management-app/src/campaign/dto/index.ts
export class CreateCampaignDto {
    name: string;
    startDate: Date;
    endDate: Date;
  }
  
  export class AddPeopleDto {
    people: {
      name: string;
      age: number;
    }[];
  }
  
  export class UpdatePaymentDto {
    status: string;
    dueDate?: Date;
  }
  