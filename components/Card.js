import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={props.check}>
                <Feather name="check-circle" size={30} color="white"
                    style={{ paddingLeft: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.check}>
                <Text style={{
                    fontSize: 20,
                    color: "#82DEFF",
                    fontWeight: 'bold',
                    marginLeft: 10,
                    flexWrap: 'wrap',
                    textDecorationLine: props.flagCheck?'line-through':'none'
                }}>
                    Task: {props.name}</Text>
            </TouchableOpacity>
            <View style={styles.del}>
                {/* <Button title='delete' onPress={props.del}></Button> */}
                <TouchableOpacity onPress={props.del}>
                    <Feather name="trash-2" size={35} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:
    {
        borderColor: 'white',
        borderRadius: 15,
        borderWidth: 5,
        backgroundColor: "#333333",
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
    },
    del:
    {
        position: 'absolute',
        marginLeft: 320,
    },
    task:
    {
        fontSize: 20,
        color: "#82DEFF",
        fontWeight: 'bold',
        marginLeft: 10,
        flexWrap: 'wrap',
    },
});
