import Expo from 'expo';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
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
            <TaskList />
        );
    }
}

AppRegistry.registerComponent('main', () => Todo);
