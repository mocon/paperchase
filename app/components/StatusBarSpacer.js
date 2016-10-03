import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorPalette from '../lib/colorPalette';

export default class StatusBarSpacer extends Component {
    render() {
        return (
            <View style={styles.statusBar}></View>
        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        flex: 1,
        height: 20,
        backgroundColor: colorPalette.primary.base
    }
});
