import React, { Component } from 'react';
import { ScrollView, View, TextInput, Image, TouchableHighlight, StyleSheet, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';
import colorPalette from '../lib/colorPalette';

class Home extends Component {
    searchPressed() {
        this.props.fetchRecipes('bacon, cucumber');
    }

    sampleData() {
        return [
            {
                "index": 0,
                "name": "Shelton Williams",
                "gender": "male",
                "email": "sheltonwilliams@comcur.com"
            },
            {
                "index": 1,
                "name": "Sarah Barnes",
                "gender": "female",
                "email": "sarahbarnes@comcur.com"
            },
            {
                "index": 2,
                "name": "Patterson Ellis",
                "gender": "male",
                "email": "pattersonellis@comcur.com"
            },
            {
                "index": 3,
                "name": "Leila Whitehead",
                "gender": "female",
                "email": "leilawhitehead@comcur.com"
            },
            {
                "index": 4,
                "name": "Barbara Hansen",
                "gender": "female",
                "email": "barbarahansen@comcur.com"
            },
            {
                "index": 5,
                "name": "Eileen Donovan",
                "gender": "female",
                "email": "eileendonovan@comcur.com"
            },
            {
                "index": 6,
                "name": "Olson Martin",
                "gender": "male",
                "email": "olsonmartin@comcur.com"
            },
            {
                "index": 7,
                "name": "Carol Gill",
                "gender": "female",
                "email": "carolgill@comcur.com"
            },
            {
                "index": 8,
                "name": "Olive Foley",
                "gender": "female",
                "email": "olivefoley@comcur.com"
            },
            {
                "index": 9,
                "name": "Agnes Morse",
                "gender": "female",
                "email": "agnesmorse@comcur.com"
            },
            {
                "index": 10,
                "name": "Pat Hernandez",
                "gender": "female",
                "email": "pathernandez@comcur.com"
            },
            {
                "index": 11,
                "name": "Flossie Warren",
                "gender": "female",
                "email": "flossiewarren@comcur.com"
            },
            {
                "index": 12,
                "name": "Davis Glass",
                "gender": "male",
                "email": "davisglass@comcur.com"
            },
            {
                "index": 13,
                "name": "Marie Washington",
                "gender": "female",
                "email": "mariewashington@comcur.com"
            },
            {
                "index": 14,
                "name": "Manuela Wooten",
                "gender": "female",
                "email": "manuelawooten@comcur.com"
            },
            {
                "index": 15,
                "name": "Vonda Lane",
                "gender": "female",
                "email": "vondalane@comcur.com"
            },
            {
                "index": 16,
                "name": "Pace Haley",
                "gender": "male",
                "email": "pacehaley@comcur.com"
            },
            {
                "index": 17,
                "name": "Kerry Callahan",
                "gender": "female",
                "email": "kerrycallahan@comcur.com"
            },
            {
                "index": 18,
                "name": "Montgomery Green",
                "gender": "male",
                "email": "montgomerygreen@comcur.com"
            },
            {
                "index": 19,
                "name": "Saundra Curry",
                "gender": "female",
                "email": "saundracurry@comcur.com"
            }
        ];
    }

    render() {
        return (
            <View style={styles.scene}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topNav}>
                    <TouchableHighlight onPress={ () => this.searchPressed() }>
                        <Text style={styles.button}>Fetch Users</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.scrollViewArea}>
                    { this.sampleData().map((person, index) => {
                        return (
                            <View key={index} style={styles.scrollViewItem}>
                                <Text style={styles.scrollViewTextPrimary}>{ person.name }</Text>
                                <Text style={styles.scrollViewTextSecondary}>{ person.email }</Text>
                            </View>
                        )
                    }) }
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Footer</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
    button: {
        textAlign: 'center',
        backgroundColor: colorPalette.primary.base,
        color: 'white',
        fontSize: 18,
        paddingTop: 25,
        paddingBottom: 15
    },
    scrollViewArea: {
        flex: 1,
        paddingVertical: 5
    },
    scrollViewItem: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    scrollViewTextPrimary: {
        fontSize: 16
    },
    scrollViewTextSecondary: {
        color: colorPalette.grays.base
    },
    footer: {
        padding: 15,
        backgroundColor: colorPalette.secondary.base
    },
    footerText: {
        textAlign: 'center',
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(Home);
