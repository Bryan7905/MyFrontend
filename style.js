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
    flatListContainer: {
        width: '50%',
        marginTop: 20,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    flatListItem: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginVertical: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    flatListHeader: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1976d2',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 6,
        letterSpacing: 1,
    },
    flatListText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
        marginLeft: 8,
    },

});



export default styles;