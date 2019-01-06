import React, { Component } from 'react';
import { markTodo} from './QueryMarkTodos';
import { getTodos } from './QuerygetTodos';
import { Mutation } from "react-apollo";
import Button from 'react-bootstrap/lib/Button';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class MarkTodo extends Component {

    marktodo_completed(update_todos) {
        update_todos({ variables: this.props, refetchQueries: [{ query: getTodos }] })
        // , { query: getAllTodos }
    }

  render() {
   
    return (
       <Mutation mutation={markTodo}>
                {(update_todos, { data }) => (
                    <Button onClick={e => {
                        e.preventDefault();
                        this.marktodo_completed(update_todos);
                    }} ><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /></Button>
                )}
            </Mutation>
    );
  }
}

export default MarkTodo;
