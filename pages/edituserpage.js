import {View, Text, Button, Alert, TextInput} from "react-native";
import { useState } from "react";
import axios from "axios";
import styles, { BUTTON_COLOR } from "../style";

export default function EditUserPage({route, navigation}) {
    const {user} = route.params;

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [user_email, setEmail] = useState(user.email);
    const [user_gender, setGender] = useState(user.gender);
    const [user_password, setPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!firstName || !lastName || !user_email || !user_gender || !user_password) {
            Alert.alert("Error", "Please fill up all required fields");
            return;
        }

        axios.put(`http://192.168.30.205:8000/registration/api/users/${user.id}/`, {
            first_name: firstName,
            last_name: lastName,
            email: user_email,
            gender: user_gender,
            password: user_password
        })
        .then(() => {
            Alert.alert("Success", "User updated successfully");
            navigation.goBack();
        })
        .catch((error) => {
            console.error(error);
            Alert.alert("Error", "Failed to update");
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.editUserTitle}>Edit User</Text>

            <View style={styles.editUserForm}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={user_email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Gender"
                    value={user_gender}
                    onChangeText={setGender}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={user_password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <View style={styles.editUserButtonContainer}>
                    <Button title="Update" onPress={handleUpdate} color={BUTTON_COLOR} />
                </View>
            </View>
        </View>
    );
}