import { InvestmentsStatus } from "../enums/InvestmentsStatus";
import { InvestmentsType } from "../enums/InvestmentsType";

export interface Investments {
  id: number;
  description: string;
  value: number;
  date: string;
  status: InvestmentsStatus;
  type: InvestmentsType;
}