import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;

const port = process.env.PORT || 3333;