import React from 'react';
import {DomainTodoLists} from "../../../types/types";
import {Tasks} from "../../../components/todolists/todolist/tasks/tasks";

type TodolistProps = {
    todoList: DomainTodoLists
}

export const TodoList = ({todoList}: TodolistProps) => {
    //console.log(todoList)
    return (
        <div>
            <Tasks todoList={todoList}/>
        </div>
    );
};
