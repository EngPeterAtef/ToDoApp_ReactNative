import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from 'react';
function Profile(props) {
    const [user, setUser] = useState("");
    const [err, setErr] = useState("");

    function goToList() {
        if (user.length != 0) {
            setErr("");
            props.navigation.navigate('To Do App',{userName:user});
        }
        else {
            setErr("Please Enter Your Name");
        }
        setUser("");//to empty the text input
    }
    function takeName(val) {
        setUser(val);
    }
    return (
        <View style={myStyle.cont}>
            <Text style={myStyle.title}>Welcome To our ToDo ApP !!</Text>
            <View>
                <Text style={myStyle.personal}>What is your Name? </Text>
                <TextInput
                    placeholder="Enter Your Name"
                    onChangeText={takeName}
                    value={user}
                ></TextInput>
                <Text style={myStyle.error}>{err}</Text>
            </View>
            <Text style={myStyle.data}>Hello {user} !!</Text>
            <Button title="Start" onPress={goToList} />
        </View>
    )
}

const myStyle = StyleSheet.create({
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
    title: {
        color: "#1BFFFF",
        fontSize: 20,
        fontWeight: 'bold',
    },
    data: {
        color: "#1BFFFF",
        fontSize: 35,
    },
    name:
    {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
    },
    info: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    personal:
    {
        color: 'grey',
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 50,
    },
    input: {
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 2,
        marginVertical: 5,
    },
    error: {
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "red",
    }
});

export default Profile;