import React, { useState } from 'react'
import { Text, View, Pressable } from 'react-native'

import styles from '../styles/Main'

export default function Main({ navigation }) {
    return (
        <View style={{paddingTop:40, backgroundColor:'#fff', height:1000}}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Choose a game mode</Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SinglePlayer')}>
                <Text style={styles.text}>Against a friend</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('AI')}>
                <Text style={styles.text}>Against AI</Text>
            </Pressable>
        </View>
    )
}