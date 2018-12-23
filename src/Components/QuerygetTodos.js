import gql from "graphql-tag";

export const getTodos = gql`{
    todos{
        todo_id
        todo_text
        todo_mark
        todo_user
    }
}`;