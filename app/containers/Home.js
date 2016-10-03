import React, { Component } from 'react';
import { ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    searchPressed() {
        this.props.fetchRecipes('bacon, cucumber');
    }

    render() {
        return (
            <View>
                <View>
                    <TouchableHighlight onPress={ () => this.searchPressed() }>
                        <Text>Fetch Recipes</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView>

                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(Home);
