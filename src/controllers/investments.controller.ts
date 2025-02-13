import { FastifyRequest, FastifyReply } from "fastify";
import investmentsService from "../services/investments.service";

async function getInvestments(req: FastifyRequest, reply: FastifyReply) {
  const investments = await investmentsService.getInvestments();
  reply.send(investments);
}

export default {
  getInvestments
}