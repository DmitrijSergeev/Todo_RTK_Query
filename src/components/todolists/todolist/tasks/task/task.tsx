import React from 'react';
import {DomainTask, DomainTodoLists, TaskStatus} from "../../../../../types/types";

type TaskProps = {
    task: DomainTask
    todoList: DomainTodoLists
}

export const Task = ({todoList, task}: TaskProps) => {

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
            <h3>{todoList.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li key={task.id}>
                    <button>x</button>
                    <input type="checkbox" checked={task.status === TaskStatus.Completed}/>
                    <span>{task.title}</span>
                </li>
            </ul>
            <div>
                <button onClick={onClickAllHandler}>All</button>
                <button onClick={onClickActiveHandler}>Active</button>
                <button onClick={onClickCompletedHandler}>Completed</button>
            </div>
        </div>
    );
};
