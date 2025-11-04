import {View, Text, FlatList, Alert, Button} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "../style";

export default function UserListPage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://peitel-backend-knbq.onrender.com/registration/api/users/")
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, []
);

    const handleEdit = (user) => {
        navigation.navigate("EditUser", {user});
    }

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            [
                {text: "Cancel", style: "cancel"},
                {
                    text: "Delete", 
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`https://peitel-backend-knbq.onrender.com/registration/api/users/${id}/`)
                            .then(() => {
                                Alert.alert("Success", "User deleted successfully");
                                setUsers(users.filter(user => user.id !== id));
                            })
                            .catch(err => {
                                console.error(err);
                                Alert.alert("Error", "Failed to delete user");
                            });
                    },
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.flatListItem}>
                            <Text style={styles.flatListHeader}>
                                {item.first_name} {item.last_name}
                            </Text>
                            <Text style={styles.flatListText}>First Name: {item.first_name}</Text>
                            <Text style={styles.flatListText}>Last Name: {item.last_name}</Text>
                            <Text style={styles.flatListText}>Email: {item.email}</Text>
                            <Text style={styles.flatListText}>Gender: {item.gender}</Text>

                            <View style={styles.buttonContainer}>
                                <Button title="Edit" onPress={() => handleEdit(item)} />
                            </View>

                            <View style={styles.buttonContainer}>
                                <Button color="red" title="Delete" onPress={() => handleDelete(item.id)} />
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}