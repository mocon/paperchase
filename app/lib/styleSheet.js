import { StyleSheet } from 'react-native';
import colorPalette from './colorPalette';

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
    topToolBar: {
        flexDirection: 'row',
        backgroundColor: colorPalette.primary.base
    },
    topToolBarTitle: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        paddingTop: 25,
        paddingBottom: 15
    },
    topToolBarButton: {
        width: 80,
        paddingTop: 29,
        paddingHorizontal: 10,
        paddingBottom: 10,
        color: 'white'
    },
    topToolBarButtonRight: {
        textAlign: 'right'
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

export default styles;
