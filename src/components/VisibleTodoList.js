const React = require('react');
import {connect} from 'react-redux';
import {toggleTodo, setVisibilityFilter, getVisibleTodos} from '../actions';

const Todo = ({onClick,completed,text}) => (
  <li
    onClick={onClick}
    style={{textDecoration:completed ?'line-through' :'none'}}
  >
    {text}
  </li>
);

const TodoList = ({todos,onTodoClick}) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
    )}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};
const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)
(TodoList);

export {VisibleTodoList}