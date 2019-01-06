import React, { Component } from 'react';
import Todo from '.././Components/Todo';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Forage from 'react-localforage'


const ACCESS_TOKEN =   <Forage.GetItem
                          key='access_token'
                          render={({inProgress, value, error}) => {
                            return (
                              <div>
                                {error &&
                                <div>
                                  {error.message}
                                </div>}
                                {inProgress && <progress/>}
                                {value &&
                                <pre>{JSON.stringify(value, null, 2)}</pre>}
                              </div>
                            )
                          }}
                        />

export const client = new ApolloClient({
  uri: "https://hasura-react-todo-apollo.herokuapp.com/v1alpha1/graphql",
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
