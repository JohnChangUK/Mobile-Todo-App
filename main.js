import Expo from 'expo';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import TaskList from './TaskList';

class Todo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Earn £50,000 minimum'
                }
            ]
        };
    }

    render() {
        return (
            <TaskList 
                todos={this.state.todos}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => Todo);
