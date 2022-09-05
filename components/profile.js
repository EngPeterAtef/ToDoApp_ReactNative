import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
function Profile(props) {
    const [user, setUser] = useState("");
    const [err, setErr] = useState("");

    //this function to check if the name is stored before
    //if it's not so error msg to sign up
    function goToList() {
        if (user.length != 0) {
            setErr("");
            props.navigation.navigate('Home',{userName:user});
        }
        else {
            setErr("Please Enter Your Name");
        }
        setUser("");//to empty the text input
    }
    //go to sign up
    function goToSignUp () {
        props.navigation.navigate('SignUp');
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
            <Button title="LogIn" onPress={goToList} />
            <TouchableOpacity onPress={goToSignUp}>
                <Text style={myStyle.signup}>SignUp</Text>
            </TouchableOpacity>
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
    },
    signup:{
        fontSize:'italic',
        fontWeight:'bold',
        fontSize:17,
        color:'#1157AA',
        borderWidth:2,
        borderColor:'grey',
        borderRadius:15,
        borderStyle: 'dashed',
        padding:5,
    }
});

export default Profile;