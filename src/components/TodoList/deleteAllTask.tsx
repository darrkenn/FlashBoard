'use client'
import {HandleDeleteAllTasks} from "@/server/deleteAllTasks";
export default function DeleteAllTasks() {
    return (
        <div>
            <button className={"bg-pink-500"} onClick={HandleDeleteAllTasks}>Delete All Tasks</button>
        </div>
    )
}