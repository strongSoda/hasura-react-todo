import React, { Component } from 'react';
import { deleteTodo} from './QueryDeleteTodos';
import { getTodos } from './QuerygetTodos';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Mutation } from "react-apollo";
import Button from 'react-bootstrap/lib/Button';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';

class DeleteTodo extends Component {
 
    constructor(props) {
        super(props);

        this.state = {}
    }
    
    deletetodo(delete_todos) {

        var todo_user = localStorage.getItem('sub');
        this.setState({ todo_user: todo_user }, function () {
        delete_todos({ variables: this.props, refetchQueries: [{ query: getTodos }] });
    });
}
    
  render() {

    return (
        <Mutation mutation={deleteTodo}>
                {(delete_todos, { data }) => (

                    <Button onClick={e => {
                        e.preventDefault();
                        this.deletetodo(delete_todos);
                    }}  ><FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} /></Button>
                )}
            </Mutation>
    );
  }
}

export default DeleteTodo;
