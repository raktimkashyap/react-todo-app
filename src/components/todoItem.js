import React from 'react'

function TodoItem(props) {
    return (
        <div style={styles.todoWrapper}>
            {props.data}
        </div>
    )
}

const styles = {
    todoWrapper: {
        width: 300,
        padding: '10px 20px',
        boxShadow: '0px 2px 4px #9a9a9a',
        borderRadius: 5,
        marginTop: 10,
        textAlign: 'left'
    }
}

export default TodoItem
