import { FastifyRequest, FastifyReply } from "fastify";
import investmentsService from "../services/investments.service";
import { z } from 'zod';
import { Investments } from "../interfaces/Investments";
import { InvestmentsStatus } from "../enums/InvestmentsStatus";
import { InvestmentsType } from "../enums/InvestmentsType";

async function getInvestments(_req: FastifyRequest, reply: FastifyReply) {
  const investments = await investmentsService.getInvestments();
  reply.send(investments);
}

async function createInvestment(req: FastifyRequest, reply: FastifyReply) {
  const investmentSchema = z.object({
    description: z.string(),
    value: z.number(),
    date: z.string(),
    status: z.nativeEnum(InvestmentsStatus),
    type: z.nativeEnum(InvestmentsType)
  });

  let investment: Omit<Investments, "id">;

  try {
    investment = investmentSchema.parse(req.body);
  } catch (error) {
    reply.status(400).send(error);
    return
  }

  const createdInvestment = await investmentsService.createInvestment(investment);
  reply.send(createdInvestment);
}

export default {
  getInvestments,
  createInvestment
}