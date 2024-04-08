/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { SetStateAction, useState } from 'react';
import Style from './index.module.css';
import useCustomHooks from '@/useCustomHooks';

function Todo() {
  const [todo, value, item, filter, onClickBtn, inputValue, deleteValue, checkBoxHandler, handleFilterChange, clearCompletedItems, checkAllTodos] = useCustomHooks();

  const filteredTodo = filter === 'All' ? todo : filter === 'Active' ? todo.filter(item => !item.checked) : todo.filter(item => item.checked);
  const itemsLeft = filter === 'All' ? item : todo.filter(todoItem => !todoItem.checked).length;

  return (
    <div className={Style.container}>
      <h1>Todos</h1>
      <div className={Style.mainDiv}>
        <img className={Style.arrowImage} onClick={checkAllTodos} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAoBJREFUSEuNV+1BxCAMfZnEcxKvk6iTtE7ibXLdRJ0EGxIgQKDlx51Cmo/38kKPCECIHzCr3uiO1dLud366Q/sQgfzAtefiQ/8aZWJzd5KLW8aFa9L4vgF4d/yqIwIhOMjl4z8Eelgb9p+zcB0DTwB3ORuD3gXuTX8BvDoVu2E/AHxfSG7YH43XBYSd+0kq7lZOdz2ONsPFAJQRFpnQoM3Lvr4SdpmI0trKGdAErls1wjtMpTpIZk3g8cPTiqfNXR8quGED4auD2pHWJLCjddliBXBfMKS71tRXfDJAYuBeelN8jQqwELAH5fDwsx2lG47Fj6mO50pEZz2+JLDQblRlh0munitlJfDiapdhxUYqPawxMG0l4ZkAYkCRHiCaTUu78ELFWWYjju8A3QjhoSDwgGGI+6CyVzh2mssLUvYK1DbIp0L6U5CjhRD25uJpmoudlSVBhK40SiPHhtnUCwzrTZllLmWkEhYE7eROTtHCkxOtBxWbZiq3Vmy4muOyHzll6aRVOW0Gy3SAzLtax6sphO01OO1A0A7OU89eKtMBMujq8aw+NLcGwh0hy8aIpFLAvGJtd2FL1mRWV47lHzuNRhynAVLOlePiIg+QprmciOMt9R8r7nUspx7UDGPSZ+PduSLObw33Pl4dqDnPJxD0DeSk2GlgO808HVuoSxzu3hc37ChYvf93SO9hnzcDhNYD70tvG14CfvwxHWlC+Rx3EVyNjiRUnrbxzaWWDOztMifTyqa3tMWY07p6O6vZ6AeEm/uCPEqlR9PSJ+/bA8nX23ES0Vvzm6a10feE9PPH4BfkDeOsD9qKTyfBFafnE6aWUxFSukznuqz4s5Be6fB/FbIQMlsdOV0AAAAASUVORK5CYII=" />
        <input className={Style.inputBox} type="text" name="todo-title" placeholder="What need to be done?" value={value} onChange={inputValue} />
        <button onClick={onClickBtn}>Add Todo</button>
      </div>
      <p>
        {filteredTodo.map((todoItem, index) => (
          <div className={`${Style.todoList} ${todoItem.checked ? Style.checked : ''}`} key={index}>
            <input type="checkbox" onChange={(e) => checkBoxHandler(index, e.target.checked)} checked={todoItem.checked} />
            <li>{todoItem.text}</li>
            <img className={Style.crossImage} onClick={() => deleteValue(index)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAg9JREFUSEulVtF1wzAIPDZJNoknqTNJR0k7SbxJu4n6JGELhLDwq3+SZ2MOjjtkQn8RgATwj3k8v+ElIBBSTl0uagA+lIxpL0fid5TaTLtyEcclE3XV2feApOO7zD4xghAHuqUKQ3iBhhzV8WCukUQlxp+rZEKPTDEfJszTZJaNGsxZ7TqJ7GAwqatq9+KFuKZ6qDbohcZ3pVVOLcqNWWA7sxsBn4nwjYRtXN5RzgPAi4B7dY+cvR3BZCfQG0g54S+AJwHbsQR09znmzcly7P2AHtAUoXrNXYiET8B0XkFbg0sibP0G7IU28LFZIGvywR9AYWXPs7TCPJuplamF00Z9FLEC9GKAQjsjFXoZQoD2M9brM0K11EClvaJk8Ft9WG50oNYDiuqIL7uYFYSXXvqw9J5K1j0kBjul3WL1HuXstG/K5AMnXeyYZ1zfkpaR1TXwiTn3x3XGEb6RQVm9NT7Tm2c8tpov6ArZMHuXqZO773QBaOM1GfF5x8PsWKzhApTVy8tBZLPgNkaBO1Qr7n+abaR6zTCl2r+Ez62B+ZtuIAdF+42Q3qksDNomJ3ZeMh+EtKhBDYQUXyATARqtOAeD/so0uvKENrjfduuEObsbLr0QtOnUonGqJytw/FGnddVSkPTx6ZoMNzpsVY6D/zsd+zMef1v5yvMkIDaXP5bYRpVEzj+TAx3Lgv5Xgnz7D9KX6ifzuTSnAAAAAElFTkSuQmCC" />
          </div>
        ))}
      </p>

      <div className={Style.footer}>
        <p>{itemsLeft} items left</p>
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Active')}>Active</button>
        <button onClick={() => handleFilterChange('Completed')}>Completed</button>
        <button onClick={clearCompletedItems}>Clear Completed</button>
      </div>
    </div>
  );
}

export default Todo;
