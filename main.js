import React, { Component } from 'react';
import { AppRegistry, Navigator, Text } from 'react-native';
import TaskList from './TaskList';

class Todo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Earn £50,000 minimum',
                },
                {
                    task: 'Wash Dishes',
                },
                {
                    task: 'Go to the Gym'
                }
            ]
        };
    }

    onAddStarted() {
        console.log("ADd Started");
    }
// route = route being requested, nav = the navigator calling this function
    renderScene(route, nav) {
        switch (route.name) {
            case 'taskform':
                return (
                    <Text>Add form comes here!</Text>
                );
            default: 
                return (
                <TaskList
                    onAddStarted={this.onAddStarted.bind(this)}
                    todos={this.state.todos}
                />
            ); 
        }
    }

    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'tasklist', index: 0}}
                ref={( (nav) => {
                    this.nav = nav;
                }) }
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => Todo);
