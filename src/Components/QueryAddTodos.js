import gql from "graphql-tag";

export const addTodo = gql`
    mutation($todo_text: String!, $todo_user: String!) {
        insert_todos(
            objects: [
                {
                  todo_text: $todo_text,
                  todo_user: $todo_user
                }
              ]
          ){
            affected_rows
          }
    }
`;

