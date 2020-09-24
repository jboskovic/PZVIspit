import { Step } from './step.model';

export interface Goal {
    _id: string;
    naziv: string;
    opis: string;
    vaznost: number;
    koraci: Step[];
}