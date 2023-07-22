import { Evenement } from "./Evenement";

export class Facture {
    idfacture!: number;
    refFacture!: string;
    dateFacture!: Date;
    estPayee!: boolean;
    datePaiement!: Date;
    montantPaye!: number;
    event!: number;
}