import React from "react";
import { View, Text, Button, Image } from 'react-native';
import styles, { BUTTON_COLOR } from '../style';

export default function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/bubbles-powerpuff-girls.png')}
            style={styles.homepageImage}>
            </Image>
            <Text style={styles.title}>Homepage</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                    color={BUTTON_COLOR}
                />
            </View>
        </View>
    );
}