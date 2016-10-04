import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import StatusBarSpacer from '../components/StatusBarSpacer'
import Home from './Home';

class AppContainer extends Component {
    // addRecipe() {
    //     this.props.addRecipe();
    // }

    render() {
        return (
            <View style={styles.container}>
                <Home {...this.props} />
                {/*<Text>This is the AppContainer component</Text>
                <Text>Recipe count: {this.props.recipeCount}</Text>
                <TouchableHighlight onPress={() => {this.addRecipe()}}>
                    <Text>Increment Recipes</Text>
                </TouchableHighlight>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {
        /*recipeCount: state.recipeCount*/
    }
}, mapDispatchToProps)(AppContainer);
