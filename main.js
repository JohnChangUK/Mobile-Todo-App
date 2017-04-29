import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

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
        this.nav.push({
            name: 'taskform'
        });
    }

    onCancel() {
        console.log('cancelled');
        this.nav.pop();
    }

    onAdd(task) {
        this.nav.pop();
        this.state.todos.push({
            task: task
        });
        this.setState({
            todos: this.state.todos
        });
        console.log('This is the task: ' + task);
    }

    onDone(todo) {
        console.log('Todo was completed: ' + todo.task);
        const filteredTodos = this.state.todos.filter( (filterTodo) => {
            return filterTodo !== todo;
        });
        this.setState({
            todos: filteredTodos
        });
    }

// route = route being requested, nav = the navigator calling this function
    renderScene(route, nav) {
        switch (route.name) {
            case 'taskform':
                return (
                    <TaskForm 
                        onAdd={this.onAdd.bind(this)}
                        onCancel={this.onCancel.bind(this)}/>
                );
            default: 
                return (
                <TaskList
                    onAddStarted={this.onAddStarted.bind(this)}
                    onDone={this.onDone.bind(this)}
                    todos={this.state.todos}
                />
            ); 
        }
    }
    
    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
        // TaskList is the default route as the navigator
                initialRoute={{ name: 'tasklist ', index: 0}}
                ref={( (nav) => {
                    this.nav = nav;
                }) }
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => Todo);
