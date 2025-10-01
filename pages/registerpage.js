import { View, Text, Button, TextInput } from 'react-native';
import styles, { BUTTON_COLOR } from '../style';
import { useState } from "react";

export default function Registerpage({ navigation }) {
const[formData, setFormData]= useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    gender:''
});

const handleChange=(field, value)=>{
    setFormData({...formData,[field]:value});
};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Registration</Text>

            <TextInput
                style={styles.input}
                placeholder='First Name'
                value={formData.first_name}
                onChangeText={(text) => handleChange("first_name", text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Last Name'
                value={formData.last_name}
                onChangeText={(text) => handleChange("last_name", text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={formData.password}
                onChangeText={(text) => handleChange("password", text)}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder='Gender'
                value={formData.gender}
                onChangeText={(text) => handleChange("gender", text)}
            />

            <Button
                title="Register and Submit"
                onPress={() => navigation.navigate("Review", {formData})}
                color={BUTTON_COLOR}
            />
        </View>
    );
};