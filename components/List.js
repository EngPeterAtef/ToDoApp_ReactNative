import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    FlatList,
    TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function List(props) {
    const [items, setItems] = useState([]);
    const [tName, setName] = useState("");
    const [err, setErr] = useState("");
    const userName = props.route.params.uName;
    //functions to set and get the async storage
    async function setStorage() {
        try {
            var data = await AsyncStorage.setItem("items", JSON.stringify(items));
        }
        catch (e) {
            console.log(e);
        }
    }
    async function getStorage() {
        try {
            var data = await AsyncStorage.getItem("items");//get the data from the local storage
            setItems(JSON.parse(data));//set the items array adn render the component
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        setStorage();//we call the setting func on change in items only
    }, [items]);//that means when the array items change execute those functions

    useEffect(() => {
        getStorage();//we call this function on the first mount only
    }, []);//the empty array means it won't be called on any update

    //function to set the name and the day of the task
    function changeName(val) {
        setName(val);
    }

    //function to add new element to the list
    function addElement() {
        if (tName) {
            setErr("");
            setItems([...items, { name: tName, checked: false }]);
        }
        else {
            setErr("Please Enter All The needed Data");
        }
        setName("");
    }
    //function to delete element from the list
    function delElememt(index) {
        //index :the element you want to delete
        //ind: ind of all elements
        //filter loops over all the elements and return the array after filter
        setItems(
            items.filter(function (val, ind) {
                return ind != index;
            })
        );
    }
    //function to check the element and put it at the end of the list
    function checkTask(index) {
        items[index].checked = !(items[index].checked);
        setItems([...items]);//to render the array to see the new values
    }
    return (
        <View style={styles.cont}>
            <View style={styles.titV}>
                <Text style={styles.tit}>Welcome {userName} !!</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={changeName}
                    placeholder="    Enter The task name"
                    value={tName}
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
                            flagCheck={obj.item.checked}
                            del={() => delElememt(obj.index)}
                            check={() => checkTask(obj.index)}
                        />
                    )
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
        paddingLeft: 65,
    }
});
