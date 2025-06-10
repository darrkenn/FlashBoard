'use client'
import {useState} from "react";
import {newTaskHandle} from "@/server/newTask";
export default function NewTask() {
    const [name, setName] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = async () => {
        const result = await newTaskHandle(name, isComplete);

        if (result.success) {
            console.log('JEEEEEOHHH');
            setName('');
            setIsComplete(false);

        } else {
            console.error('sadjoe')
        }
    };

    return (
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter task name"/>
                <label>
                    <input
                        type="checkbox"
                        checked={isComplete}
                        onChange={(e) => setIsComplete(e.target.checked)}/>
                </label>
                <button className={"bg-pink-500"} onClick={handleSubmit}>Eh</button>
            </div>
    )
}