import React, { useState } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'

// game functions
import { checkWinner, checkTie } from '../../utils/tris/trisGameHandlers'

// import style
import styles from '../../styles/SinglePlayer' 

export default function SinglePlayer({ navigation }) {
    const [boxes, setBoxes] = useState([])
    const [turn, setTurn] = useState('X')
    const [gameFinished, setGameFinished] = useState(false)
    const [gameFinishedMessage, setGameFinishedMessage] = useState('')

    const onPressButton = (i) => {
        if(gameFinished) return
        if(boxes[i] != ' ' && boxes[i]) return

        boxes[i] = turn
        for(let i = 0; i < 9; i++) {
            if(!boxes[i]) boxes[i] = ' '
        }

        if(checkWinner(boxes, turn)) {
            setGameFinishedMessage(`Win ${turn}`)
            setBoxes([...boxes])
            setGameFinished(true)
            return 0
        }

        if(checkTie(boxes)) {
            setGameFinishedMessage('Tie')
            setBoxes([...boxes])
            setGameFinished(true)
            return 0
        }

        turn == 'X' ? setTurn('O') : setTurn('X')
        setBoxes([...boxes])
    }

    const reset = () => {
        setBoxes([])
        setTurn('X')
        setGameFinished(false)
        setGameFinishedMessage(' ')
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Tic Tac Toe</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.zero} onPress={() => {onPressButton(0)}}>
                        {boxes[0]}
                    </Text>
                    <Text style={styles.one} onPress={() => {onPressButton(1)}}>
                        {boxes[1]}
                    </Text>
                    <Text style={styles.two} onPress={() => {onPressButton(2)}}>
                        {boxes[2]}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.three} onPress={() => {onPressButton(3)}}>
                        {boxes[3]}
                    </Text>
                    <Text style={styles.four} onPress={() => {onPressButton(4)}}>
                        {boxes[4]}
                    </Text>
                    <Text style={styles.five} onPress={() => {onPressButton(5)}}>
                        {boxes[5]}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.six} onPress={() => {onPressButton(6)}}>
                        {boxes[6]}
                    </Text>
                    <Text style={styles.seven} onPress={() => {onPressButton(7)}}>
                        {boxes[7]}
                    </Text>
                    <Text style={styles.eight} onPress={() => {onPressButton(8)}}>
                        {boxes[8]}
                    </Text>
                </View>
            </View>

            <View style={styles.buttonWrapper}>
                <Text style={styles.winMessage}>{gameFinishedMessage}</Text>
                <Pressable style={styles.button} onPress={reset}>
                    <Text style={styles.text}>Reset</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}