const React = require('react');
const ReactDOM = require('react-dom');
const {createStore} = require('redux');
const { Provider} = require('react-redux');
import {todoApp} from './reducers';
import {AddTodo, VisibleTodoList, Footer} from './components';


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);


ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);