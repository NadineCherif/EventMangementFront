export class Evenement {
    id!: number;
    nameEvent!: string;
    eventCategory!: string;
    typeEvent!: string;
    localisation!: string;
    description!: string;
    nbrMax!: number;
    startDateEvent!: Date;
    endDate!: Date;
    statut!: Statut;
    
    
}
export enum Statut {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
  }