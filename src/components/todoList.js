import React from 'react'
import TodoItem from './todoItem'

function TodoList(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            paddingTop: 20
        }}>
            <TodoItem data='learn redux' />
            <TodoItem data='learn Node js' />
            <TodoItem data='learn Flutter' />
        </div>
    )
}

export default TodoList
