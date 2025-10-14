import React, { useState } from "react";
import { View, Text, Button, Alert, ActivityIndicator } from "react-native";
import styles, { BUTTON_COLOR } from "../style";
import axios from "axios";

export default function Reviewpage({ route, navigation }) {
    const { formData } = route.params;
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setSuccess(false);
        try {
            const response = await axios.post("http://192.168.30.205:8000/registration/api/register/", formData);
            setSuccess(true);
            Alert.alert("Success", "User registered successfully!");
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        } finally {
            setLoading(false);
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
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={handleSubmit} color={BUTTON_COLOR} disabled={loading}/>
            </View>

            {loading && (
                <ActivityIndicator size="large" color={BUTTON_COLOR} style={{ marginTop: 20 }} />
            )}

            {success && (
                <Text style={{ color: "green", fontSize: 18, marginTop: 20 }}>Data successfully submitted!</Text>
            )}

            <View style={styles.buttonContainer}>
                <Button title="View User List" onPress={() => navigation.navigate("UserList")} color={BUTTON_COLOR}/>
            </View>
        </View>
    );
}