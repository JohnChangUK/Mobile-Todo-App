import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Text
} from 'react-native';

import TaskRow from './TaskRow';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start'
    },
    button: {
        height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    }
});

class TaskList extends Component {
    constructor(props, context) {
        super(props, context);
    // The data in the DataSource is immutable, do you can't modify directly
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos)
        };
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = this.state.dataSource
        .cloneWithRows(nextProps.todos);

        this.setState({ dataSource: dataSource });
    }
// renderRow function will be called for each todo in our list
    renderRow(todo) {
        return (
            <TaskRow 
                onDone={this.props.onDone}
                todo={todo} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView 
                    dataSource={this.state.dataSource}
                    key={this.props.todos}
                    renderRow={this.renderRow.bind(this)}
                />

                <TouchableHighlight 
                    onPress={this.props.onAddStarted}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Add One
                    </Text>
                </TouchableHighlight>
            </View>
         ); 
    }
}

TaskList.propTypes = {
    onDone: React.PropTypes.func.isRequired,
    onAddStarted: React.PropTypes.func.isRequired,
    todos: React.PropTypes
        .arrayOf(React.PropTypes.object).isRequired 
}

export default TaskList;