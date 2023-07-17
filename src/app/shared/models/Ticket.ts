export class Ticket {
    Ticketid!: number;
    NumeroTicket!: string;
    Price!: number;
    DateNow!: Date;

}
export enum TypeTicket {
    BASIC = 'BASIC',
    VIP = 'VIP'
  }