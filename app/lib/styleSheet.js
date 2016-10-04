import { StyleSheet } from 'react-native';
import colorPalette from './colorPalette';

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
    topToolBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 100,
        marginTop: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    topToolBarButtonRight: {
        justifyContent: 'flex-end',
        flex: 1
    },
    topToolBarIcon: {
        height: 30,
        marginTop: -13,
        paddingTop: 10
    },
    scrollViewArea: {
        flex: 1
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
    },
    textColorWhite: {
        color: 'white'
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    invisible: {
        opacity: 0
    }
});

export default styles;
