'use server'
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();
export async function newTaskHandle(uName: string, uComplete: boolean) {
    try {
        const outcome = await prisma.task.create({
            data: {
                name: uName,
                complete: uComplete
            },
        });
        return {success: true, result: outcome};
    } catch (error) {
        return {success: false, result: error};
    }
}