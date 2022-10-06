import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className='TodoList'>
      {todos.length === 0 ? (
        <b>오늘의 일정을 작성해보세요!</b>
      ) : (
        todos.map((todo) => (
          <TodoListItem
            {...todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default React.memo(TodoList);
