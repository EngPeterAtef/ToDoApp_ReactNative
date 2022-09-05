import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Deleted(props) {
    const userName = props.route.params.uName;
    return (
        <View style={styles.cont}>
            <View style={styles.titV}>
                <Text style={styles.tit}>Welcome {userName} !!</Text>
            </View>
        </View>
    )
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
    }
});