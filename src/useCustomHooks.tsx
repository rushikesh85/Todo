import React, { SetStateAction } from 'react'
import { useState } from 'react'

type TodoItem = {
    text: string;
    checked: boolean;
};

function useCustomHooks() {

    const [todo, setTodo] = useState<TodoItem[]>([]);
    const [value, addValue] = useState<string>('');
    const [item, setItem] = useState<number>(0);
    const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

    function onClickBtn() {
        if (value.trim() !== '') {
            setTodo([...todo, { text: value, checked: false }]);
            addValue('');
            setItem(item + 1);
        }
    }

    function inputValue(e: { target: { value: SetStateAction<string> } }) {
        addValue(e.target.value);
    }

    function deleteValue(index: number) {
        const updatedTodo = [...todo];
        const deletedItem = updatedTodo[index];
        updatedTodo.splice(index, 1);
        setTodo(updatedTodo);
        if (!deletedItem.checked) {
            setItem(item - 1);
        }
    }

    function checkBoxHandler(index: number, checked: boolean) {
        const updatedTodo = [...todo];
        updatedTodo[index] = { ...updatedTodo[index], checked };
        setTodo(updatedTodo);
        if (checked) {
            setItem(item - 1);
        } else {
            setItem(item + 1);
        }
    }

    function handleFilterChange(filter: 'All' | 'Active' | 'Completed') {
        setFilter(filter);
    }

    function clearCompletedItems() {
        const updatedTodo = todo.filter(todoItem => !todoItem.checked);
        setTodo(updatedTodo);
    }

    function checkAllTodos() {
        const allChecked = todo.every(todoItem => todoItem.checked);
        const updatedTodo = todo.map(todoItem => ({ ...todoItem, checked: !allChecked }));
        setTodo(updatedTodo);
        setItem(allChecked ? todo.length : 0);
    }
    return [todo, value, item, filter, onClickBtn, inputValue, deleteValue, checkBoxHandler, handleFilterChange, clearCompletedItems, checkAllTodos] as const

}

export default useCustomHooks
