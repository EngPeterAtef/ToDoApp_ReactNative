import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    FlatList,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import Card from "./Card";

export default function List() {
    const [items, setItems] = useState([]);
    const [tName, setName] = useState("");
    const [tDay, setDay] = useState("");
    const [err, setErr] = useState("");

    //function to set the name and the day of the task
    function changeName(val) {
        setName(val);
    }
    function changeDay(val) {
        setDay(val);
    }
    //function to add new element to the list
    function addElement() {
        if (tName && tDay.length>=3) {
            setErr("");
            setItems([...items, { name: tName, day: tDay }]);
        } 
        else {
            setErr("Please Enter All The needed Data");
        }
    }
    //function to delete element from the list
    function delElememt(index) {
        setItems(
            items.filter(function (val, ind) {
                return ind != index;
            })
        );
    }
    return (
        <View style={styles.cont}>
            <View style={styles.titV}>
                <Text style={styles.tit}>To Do App</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={changeName}
                    placeholder="    Enter The task name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={changeDay}
                    placeholder="    Enter The task day"
                />
                <Button title="Add" onPress={addElement}></Button>
                <Text style={styles.error}>{err}</Text>
            </View>
            {/* <ScrollView style={styles.lt}>
            {items.map((item,index)=><View style={styles.card} key={index}>
                <View>
                    <Text style={styles.task}>Task: {item.name}</Text>
                    <Text style={styles.task}>Day: {item.day}</Text>
                </View>
                <View style={styles.del}>
                    <Button title='delete'></Button>
                </View>
                </View>)}
        </ScrollView> */}

            {/* Another way to render an array */}
            <FlatList
                // numColumns={2}
                // horizontal
                data={items}
                keyExtractor={(item, index) => index} //it returns the index to be the key
                renderItem={
                    (
                        obj //this function returns the an object has the index in the array and the item
                    ) => (
                        <Card
                            name={obj.item.name}
                            day={obj.item.day}
                            del={() => delElememt(obj.index)}
                        />
                    )

                    // <View style={styles.card}>
                    //     <View>
                    //         <Text style={styles.task}>Task: {obj.item.name}</Text>
                    //         <Text style={styles.task}>Day: {obj.item.day}</Text>
                    //     </View>
                    //     <View style={styles.del}>
                    //         <Button title='delete'></Button>
                    //     </View>
                    // </View>
                }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    tit: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#82DEFF",
    },
    titV: {
        backgroundColor: "#1E1E1E",
        marginTop: 30,
        width: 400, //full width
        alignItems: "center",
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
        paddingLeft:65,
    },
    // task:
    // {
    //     fontSize: 23,
    //     color: "#82DEFF",
    //     fontWeight: 'bold',
    //     marginLeft: 10,
    // },
    // card:
    // {
    //     borderColor:'white',
    //     borderRadius:15,
    //     borderWidth:5,
    //     backgroundColor:"#333333",
    //     height:90,
    //     flexDirection:'row',
    //     alignItems:'center',
    // },
    // del:
    // {
    //     position: 'absolute',
    //     marginLeft:270,
    // }
});
