import { Investments } from "../interfaces/Investments";
import { InvestmentsStatus } from "../enums/InvestmentsStatus";
import { InvestmentsType } from "../enums/InvestmentsType";
import { $Enums } from "@prisma/client";

export function convertInvestment(prismaInvestment: {
  id: string;
  description: string;
  value: number;
  date: Date;
  status: $Enums.InvestmentsStatus;
  type: $Enums.InvestmentsType;
}): Investments {
  return {
    ...prismaInvestment,
    date: prismaInvestment.date.toISOString(),
    status: InvestmentsStatus[prismaInvestment.status],
    type: InvestmentsType[prismaInvestment.type],
  };
}