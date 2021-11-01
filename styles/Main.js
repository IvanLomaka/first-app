import { StyleSheet } from 'react-native'

const stylesMain = StyleSheet.create({
    header: {
        flex: 0,
        height: 400
    },
    headerText: {
        textAlign: 'center',
        fontSize: 40,
        height: 400,
        paddingTop: 250
    },
    button: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default stylesMain