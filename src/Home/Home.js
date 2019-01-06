import React, { Component } from 'react';
import Todo from '.././Components/Todo';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export const client;

class Home extends Component {

  constructor(props) {
    super(props);
    const ACCESS_TOKEN = localStorage.getItem('access_token');
    client = new ApolloClient({
      uri: "https://hasura-react-todo-apollo.herokuapp.com/v1alpha1/graphql",
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      }
    });
  }
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
<div className="container">
{
  isAuthenticated() && (
    <ApolloProvider client={client}>
        <Todo />
    </ApolloProvider>
  )
}
</div>
    );
  }
}

export default Home;
