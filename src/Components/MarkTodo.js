import React, { Component } from 'react';
import { markTodo} from './QueryMarkTodos';
import { getTodos } from './QuerygetTodos';
import { Mutation } from "react-apollo";
import Button from 'react-bootstrap/lib/Button';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {Form } from 'react-bootstrap/lib/Form';

class MarkTodo extends Component {

    marktodo_completed(update_todos) {
        update_todos({ variables: this.props, refetchQueries: [{ query: getTodos }] })
        // , { query: getAllTodos }
    }

  render() {
   
    return (
     <div className="todo">
       <Mutation mutation={markTodo}>
                {(update_todos, { data }) => (
                    <Form onSubmit={() => {
                        this.marktodo_completed(update_todos);
                    }} ><Button type='submit'><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /></Button></Form>
                )}
            </Mutation>
     </div>
    );
  }
}

export default MarkTodo;
