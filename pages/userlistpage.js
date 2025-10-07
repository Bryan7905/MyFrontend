import {View, Text, FlatList} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "../style"; 

export default function UserListPage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, []
);

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
                            <Text style={styles.flatListText}><strong>First Name:</strong> {item.first_name}</Text>
                            <Text style={styles.flatListText}><strong>Last Name:</strong> {item.last_name}</Text>
                            <Text style={styles.flatListText}><strong>Email:</strong> {item.email}</Text>
                            <Text style={styles.flatListText}><strong>Gender:</strong> {item.gender}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}