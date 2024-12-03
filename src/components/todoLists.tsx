import React from 'react';
import {TaskType} from "../App";
import {FilterType} from "../types/types";

type TodoProps = {
    tasks: TaskType[]
    filter: FilterType
    title: string
}

export const TodoList = (props: TodoProps) => {
    const {tasks, filter, title} = props

    const onClickAllHandler = () => {

    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map( (t)=>{
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={onClickAllHandler}>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
