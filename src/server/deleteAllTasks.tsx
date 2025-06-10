'use server'
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();
export async function HandleDeleteAllTasks() {
    try {
        const outcome = await prisma.task.deleteMany({});
        return {success: true, result: outcome};
    } catch (error) {
        return {success: false, result: error};
    }
}