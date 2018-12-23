import React, { Component } from 'react';
import { Query } from "react-apollo";
import { getTodos } from './QuerygetTodos';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AddTodo from './AddTodo';
import DeleteTodo from '.././Components/DeleteTodo';
import MarkTodo from '.././Components/MarkTodo';
import ButtonGroup from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class Todo extends Component {
 
  render() {
   
    return (
     <div className="todo">
        <Query query={getTodos}>
        {({ loading, error, data }) => {
            if (loading) return (<h2>Loading... <FontAwesomeIcon icon={faSpinner} style={{ color: 'blue' }} spin /></h2>);
            if (error) return (`Error! fetching todos, trying again. ${window.location.reload()}`);
            if (data.todos.length === 0) return (
                <div>
                    <h3>No Todos Created Yet</h3>
                    <AddTodo />
                </div>
            );
            let count = 0;
            return (
                <div>
                    
                    <Grid>
                        <Row>
                            <Col md={8} mdPush={2}>
                            <h1>ToDo</h1>
                            <p>
                                <blockquote>Todos in green are completed, todos in red are pending. Check to mark todo as done. Cross to delete a todo.</blockquote>
                            </p>
                                <ListGroup>
                                    {data.todos.map((todo) => (
                                        <ListGroupItem key={todo.todo_id} bsStyle={(todo.todo_mark ? 'success' : 'danger')}>
                                            <ButtonGroup className="btngrp">
                                            {
                                                                    !todo.todo_mark && (
                                                                        <MarkTodo todo_id={todo.todo_id} />
                                                                    )
                                                                }
                                                                <DeleteTodo todo_id={todo.todo_id} />
                                            </ButtonGroup>
                                            <h4>{count = count + 1}. {todo.todo_text}</h4>
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                                <ListGroup>
                                    <ListGroupItem>
                                        <h4>Add Todo</h4>
                                        <AddTodo />
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            );
        }}
    </Query>
     </div>
    );
  }
}

export default Todo;
