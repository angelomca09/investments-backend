import { InvestmentsStatus } from "../enums/InvestmentsStatus";
import { InvestmentsType } from "../enums/InvestmentsType";
import { Investments } from "../interfaces/Investments";
import { prisma } from "../lib/prisma";
import { convertInvestment } from "../utils/investments.utils";

async function getInvestments(): Promise<Investments[]> {

  const investments = await prisma.investments.findMany();

  const convertedInvestments: Investments[] = investments.map(inv => ({
    ...inv,
    date: inv.date.toISOString(),
    status: InvestmentsStatus[inv.status],
    type: InvestmentsType[inv.type]
  }))

  return convertedInvestments;
}

async function createInvestment(investment: Omit<Investments, "id">): Promise<Investments> {
  const createdInvestment = await prisma.investments.create({
    data: {
      ...investment,
      date: new Date(investment.date),
    }
  });

  return convertInvestment(createdInvestment);
}

async function updateInvestment(id: string, investment: Partial<Omit<Investments, "id">>): Promise<Investments> {
  const updatedInvestment = await prisma.investments.update({
    where: { id },
    data: {
      ...investment,
      date: investment.date ? new Date(investment.date) : undefined,
    }
  });

  return convertInvestment(updatedInvestment);
}

async function deleteInvestment(id: string): Promise<void> {
  await prisma.investments.delete({
    where: { id }
  });
}

export default {
  getInvestments,
  createInvestment,
  updateInvestment,
  deleteInvestment
};