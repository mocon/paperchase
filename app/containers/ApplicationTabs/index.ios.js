import { View, Text, TabBarIOS } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TakePhoto from '../TakePhoto';
import RecentPhotos from '../RecentPhotos';
import styles from '../../lib/styleSheet';

class ApplicationTabs extends Component {
    renderScene(component) {
        return (
            <View style={styles.scene}>
                {React.createElement(component, this.props)}
            </View>
        )
    }

    onPress(tabIndex) {
        this.props.setTab(tabIndex);
    }

    render() {
        return (
            <TabBarIOS style={styles.scene}>
                <Icon.TabBarItem
                    title="Take Photo"
                    onPress={ () => {return this.onPress(0);} }
                    iconName="add-a-photo"
                    iconSize={24}
                    iconColor="#bbb"
                    selected={this.props.tabs.index === 0}
                    selectedIconColor="#00c4b4"
                    renderAsOriginal={true}>
                    {this.renderScene(TakePhoto)}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="Recent Photos"
                    onPress={ () => {return this.onPress(1);} }
                    iconName="photo-library"
                    iconSize={24}
                    iconColor="#bbb"
                    selected={this.props.tabs.index === 1}
                    selectedIconColor="#00c4b4"
                    renderAsOriginal={true}>
                    {this.renderScene(RecentPhotos)}
                </Icon.TabBarItem>
            </TabBarIOS>
        )
    }
}

function mapStateToProps(state) {
    return {
        tabs: state.tabs
    }
}

export default connect(mapStateToProps)(ApplicationTabs);
