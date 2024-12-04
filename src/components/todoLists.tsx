import React from 'react';
import {DomainTask, FilterType, TaskStatus} from "../types/types";

type TodoProps = {
    todoId: string
    tasks: DomainTask[]
    filter: FilterType
    title: string
}

export const TodoList = (props: TodoProps) => {
    const {tasks, filter, title, todoId} = props

    const onClickAllHandler = () => {
        //changeFilterStatus(todoId,'all')
    }
    const onClickActiveHandler = () => {
        //changeFilterStatus(todoId,'active')
    }
    const onClickCompletedHandler = () => {
        //changeFilterStatus(todoId,'completed')
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks?.map( (t)=>{
                    return (
                        <li key={t.id}>
                            <button>x</button>
                            <input type="checkbox" checked={t.status === TaskStatus.Completed}/>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={onClickAllHandler}>All</button>
                <button onClick={onClickActiveHandler}>Active</button>
                <button onClick={onClickCompletedHandler}>Completed</button>
            </div>
        </div>
    );
};
