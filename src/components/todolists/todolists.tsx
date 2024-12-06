import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setTodoListsTC} from "../../store/todoListsReducer";
import {TodoList} from "../../components/todolists/todolist/todolist";

// type TodoProps = {
//     todoId: string
//     filter: FilterType
//     title: string
// }


export const TodoLists = () => {

    const todoLists = useAppSelector(state => state.todoLists)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setTodoListsTC())
    }, [dispatch]);

    return (
        <div>
            {todoLists.map( (tl)=>{
                return (
                    <TodoList key={tl.id} todoList={tl}/>
                )
            } )}
        </div>
    );
};
