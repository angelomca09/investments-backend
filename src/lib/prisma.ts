import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  //log: ["query"], // Comment this line to disable query logging]
});