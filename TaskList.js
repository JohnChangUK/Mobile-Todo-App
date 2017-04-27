import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    }
});

class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>The TaskList Component</Text>
            </View>
            ); 
    }
}

export default TaskList;