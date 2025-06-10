import {PrismaClient} from "@/generated/prisma";

const prisma = new PrismaClient();
export default async function ListOfTask() {
    const tasks = await prisma.task.findMany();
    return (
        <div>
        {tasks.map((task) => (
        <li key={task.id}>
            {task.name} Complete: {task.complete}
        </li>
        ))}
        </div>
    );
}