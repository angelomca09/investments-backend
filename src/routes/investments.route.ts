import { FastifyInstance } from "fastify";
import investmentsController from "../controllers/investments.controller";

export async function investmentsRoutes(app: FastifyInstance) {
  app.get("/investments", investmentsController.getInvestments);
}
