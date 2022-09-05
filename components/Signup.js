import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Signup() {
  return (
    <View style={myStyle.cont}>
      <Text>Signup</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cont:
    {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 25,
        elevation: 30,
        backgroundColor: "white",
        width: 300,
        height: 500,
        marginHorizontal: 50,
        marginVertical: 50,
    },
})