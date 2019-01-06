import gql from "graphql-tag";


export const getTodos = gql`{

    todos(order_by: [todo_mark_asc,todo_id_desc])
    {
        todo_id
        todo_text
        todo_mark
        todo_user
    }
}`;