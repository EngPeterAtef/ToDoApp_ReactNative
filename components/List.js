import { View, Text, StyleSheet, ScrollView,Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import Card from './Card';

export default function List() {
    const [items, setItems] = useState(
        [
            { name: "study1", day: "sat" },
            { name: "study2", day: "sat" },
            { name: "study3", day: "sat" },
            { name: "study4", day: "sat" },
            { name: "study5", day: "sat" },
            { name: "study6", day: "sat" },
            { name: "study7", day: "sat" },
            { name: "study8", day: "sat" },
            { name: "study9", day: "sat" },
            { name: "study10", day: "sat" },
            { name: "study11", day: "sat" },
            { name: "study111", day: "sat" },
        ]
    );
    //function to add new element to the list
    function addElement (taskName,taskDay) {
        setItems([...items,{name:taskName,day:taskDay}]);
    }
    //function to delete element from the list
    function delElememt (index) {
        setItems(items.filter(function(val,ind){
            return ind !=index;
        }));
    };
    return (
        <View style={styles.cont}>
            <View style={styles.titV}>
                <Text style={styles.tit}>To Do App</Text>
            </View>
            <Button title='Add' onPress={addElement}></Button>
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
                keyExtractor={(item, index) => index}//it returns the index to be the key
                renderItem={(obj) =>//this function returns the an object has the index in the array and the item
                    <Card name={obj.item.name} day={obj.item.day} del={()=>delElememt(obj.index)} />
                    
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
    )
}
const styles = StyleSheet.create({
    tit:
    {
        fontSize: 30,
        fontWeight: "bold",
        color: "#82DEFF",
    },
    titV:
    {
        backgroundColor: "#1E1E1E",
        marginTop: 30,
        width: 400,//full width
        alignItems: "center",
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
})