import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPrompts(app: FastifyInstance) {
  app.get("/prompt", async (req, res) => {
    const prompts = await prisma.prompt.findMany({});

    return prompts;
  });
}
