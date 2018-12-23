import gql from "graphql-tag";

export const markTodo = gql`
    mutation($todo_id: Int!) {
        update_todos(
            where: {todo_id: {_eq: $todo_id}} 
            _set: {todo_mark: true}
            ){
            affected_rows
          }
    }
`;