import React from "react";
import { View, Text, Button, Alert } from "react-native";
import styles, { BUTTON_COLOR } from "../style";
import axios from "axios";

export default function Reviewpage({ route, navigation }) {
    const { formData } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/registration/api/register/", formData);
            Alert.alert("Success", "User registered successfully!");
            navigation.getBack();
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Information</Text>
            <View style={styles.reviewInfoContainer}>
                <Text style={styles.reviewLabel}>First Name: <Text style={styles.reviewValue}>{formData.first_name}</Text></Text>
                <Text style={styles.reviewLabel}>Last Name: <Text style={styles.reviewValue}>{formData.last_name}</Text></Text>
                <Text style={styles.reviewLabel}>Email: <Text style={styles.reviewValue}>{formData.email}</Text></Text>
                <Text style={styles.reviewLabel}>Password: <Text style={styles.reviewValue}>{formData.password}</Text></Text>
                <Text style={styles.reviewLabel}>Gender: <Text style={styles.reviewValue}>{formData.gender}</Text></Text>

                <Button title="Go Back to Edit" onPress={() => navigation.goBack()} color={BUTTON_COLOR}/>
                <Button title="Submit" onPress={handleSubmit} color={BUTTON_COLOR}/>
            </View>
        </View>
    );
}