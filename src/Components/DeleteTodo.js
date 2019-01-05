import React, { Component } from 'react';
import { deleteTodo} from './QueryDeleteTodos';
import { getTodos } from './QuerygetTodos';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Mutation } from "react-apollo";
import Button from 'react-bootstrap/lib/Button';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class DeleteTodo extends Component {
 
    deletetodo(delete_todos) {
        delete_todos({ variables: this.props, refetchQueries: [{ query: getTodos }] });
    }
    
  render() {

    return (
     <div className="">
        <Mutation mutation={deleteTodo}>
                {(delete_todos, { data }) => (
                    <Button onClick={
                        this.deletetodo(delete_todos)
                    }  ><FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} /></Button>
                )}
            </Mutation>
     </div>
    );
  }
}

export default DeleteTodo;
