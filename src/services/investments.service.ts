import { InvestmentsStatus } from "../enums/InvestmentsStatus";
import { InvestmentsType } from "../enums/InvestmentsType";
import { Investments } from "../interfaces/Investments";
import { prisma } from "../lib/prisma";

async function getInvestments(): Promise<Investments[]> {

  const investments = await prisma.investments.findMany({
    select: {
      id: true,
      description: true,
      value: true,
      date: true,
      status: true,
      type: true,
    },
  });

  const convertedInvestments: Investments[] = investments.map(inv => ({
    ...inv,
    date: inv.date.toISOString(),
    status: InvestmentsStatus[inv.status],
    type: InvestmentsType[inv.type]
  }))

  return convertedInvestments;
}

async function createInvestment(investment: Omit<Investments,"id">): Promise<Investments> {
  const createdInvestment = await prisma.investments.create({
    data: {
      ...investment,
      date: new Date(investment.date),
    }
  });

  return {
    ...createdInvestment,
    date: createdInvestment.date.toISOString(),
    status: InvestmentsStatus[createdInvestment.status],
    type: InvestmentsType[createdInvestment.type]
  };
}

export default { getInvestments, createInvestment };