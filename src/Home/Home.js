import React, { Component } from 'react';
import Todo from '.././Components/Todo';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const ACCESS_TOKEN = localStorage.getItem('access_token');;
export const client = new ApolloClient({
  uri: "https://blog-hasura-internship.herokuapp.com/v1alpha1/graphql",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  }
});


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <ApolloProvider client={client}>
        <div className="container">
          {
            isAuthenticated() && (
                <div>
                   <Todo />
                </div>   
              )
          }
        </div>
      </ApolloProvider>
    );
  }
}

export default Home;
