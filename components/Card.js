import { StyleSheet, Text, View,Button } from "react-native";
import React from "react";

export default function Card(props) {
  return (
    <View style={styles.card}>
            <View>
                <Text style={styles.task}>Task: {props.name}</Text>
                <Text style={styles.task}>Day: {props.day}</Text>
            </View>
            <View style={styles.del}>
                <Button title='delete' onPress={props.del}></Button>
            </View>
        </View>
);
}

const styles = StyleSheet.create({
card:
{
    borderColor:'white',
    borderRadius:15,
    borderWidth:5,
    backgroundColor:"#333333",
    height:90,
    flexDirection:'row',
    alignItems:'center',
},
del:
{
    position: 'absolute',
    marginLeft:270,
},    
task:
{
    fontSize: 23,
    color: "#82DEFF",
    fontWeight: 'bold',
    marginLeft: 10,
},
});
