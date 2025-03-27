import { FastifyInstance } from "fastify";
import investmentsController from "../controllers/investments.controller";

export async function investmentsRoutes(app: FastifyInstance) {
  app.get("/investments", investmentsController.getInvestments);
  app.post("/investments", investmentsController.createInvestment);
  app.put("/investments/:id", investmentsController.updateInvestment);
  app.delete("/investments/:id", investmentsController.deleteInvestment);
}
