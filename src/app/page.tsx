import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();
export default  async function Home() {
  // const newTask = await prisma.task.create({
  //   data: {
  //     name: 'Alice',
  //     complete: true
  //   },
  // })
    const tasks = await prisma.task.findMany();
  return (
      <main>
          {tasks.map((task) => (
              <li key={task.id}>
                  Name: {task.name}, Complete: {task.complete}
              </li>
          ))}
      </main>
  );
}
