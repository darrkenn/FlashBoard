import ListOfTask from "@/components/TodoList/taskList";
import NewTask from "@/components/TodoList/newTask";
import DeleteAllTasks from "@/components/TodoList/deleteAllTask";

export default function FinalTodoList() {

    return (
        <main className={"flex items-center justify-center"}>
            <div className={"bg-neutral-900"}>
                <div className={""}>
                    <ListOfTask />
                </div>
                <div className={"bg-neutral-900"}>
                    <NewTask />
                </div>
                <div className={"flex items-center justify-center"}>
                    <DeleteAllTasks />
                </div>
            </div>



        </main>
    )
}