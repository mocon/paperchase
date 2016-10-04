import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import ApplicationTabs from './ApplicationTabs';
import styles from '../lib/styleSheet';

class AppContainer extends Component {
    render() {
        return (
            <View style={styles.scene}>
                <ApplicationTabs {...this.props} />
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {}
}, mapDispatchToProps)(AppContainer);
