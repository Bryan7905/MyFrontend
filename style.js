import { StyleSheet } from 'react-native';

export const BUTTON_COLOR = '#000000';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    buttonContainer: {
        width: '10%',
        marginTop: 10,
        alignSelf: 'center',
    },
    input: {
        width: 250,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    reviewInfoContainer: {
        marginTop: 20,
        alignItems: "flex-start",
    },
    reviewLabel: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    reviewValue: {
        fontWeight: "normal",
        color: "#555",
    },
     homepageImage: {
        width: 170,
        height: 170,
        alignSelf: 'center',
    },

});

export default styles;