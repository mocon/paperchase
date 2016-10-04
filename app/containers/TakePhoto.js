import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import styles from '../lib/styleSheet';

class TakePhoto extends Component {
    render() {
        return (
            <View style={[styles.scene, styles.centered]}>
                <StatusBar barStyle="default" />
                <Text>Take photo goes here</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(TakePhoto);
