import React, { Component } from 'react';
import { addTodo } from './QueryAddTodos';
import { getTodos } from './QuerygetTodos';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Mutation } from "react-apollo";




class AddTodo extends Component {
   
   
    constructor(props) {
        super(props);

        this.state = {
            todo_text: "",
            todo_user: ""
        }
    }

    addtodo(insert_todos) {
        var todo_user = localStorage.getItem('sub');
        this.setState({ todo_user: todo_user }, function () {
            insert_todos({ variables: this.state, refetchQueries: [{ query: getTodos }] });
        });
    }

  render() {

    return (
     <div className="todo">
       <Mutation mutation={addTodo}>
                {(insert_todos, { data }) => (
                    <Form
                        onSubmit={e => {
                            e.preventDefault();
                            this.addtodo(insert_todos);
                        }}
                    >

                    {
                        <FormGroup controlId="Createtodo" style={{'margin-bottom':'0px'}}>
                            <InputGroup>
                            <FormControl
                                type="text"
                                value={this.state.todo_text}
                                placeholder="Create a todo task."
                                onChange={e => this.setState({ todo_text: e.target.value })}
                          />
                          <InputGroup.Button>
                          <Button type="submit"><FontAwesomeIcon icon={faPlus} style={{ color: 'blue' }} /></Button>
                          </InputGroup.Button>
                          </InputGroup>
                        </FormGroup>
                    }
                        
                    </Form>
                )}
            </Mutation>
     </div>
    );
  }
}

export default AddTodo;
