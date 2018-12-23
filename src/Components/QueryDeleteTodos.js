import gql from "graphql-tag";

export const deleteTodo = gql`
    mutation($todo_id: Int!) {
        delete_todos(
            where: {todo_id: {_eq:$todo_id}}
        ){
            affected_rows
        }
    }
`;