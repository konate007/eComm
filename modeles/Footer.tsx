import React from "react"
import { Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Footer = () => {
    return (
        <SafeAreaView style={{
            height: 40,
            borderRadius: 15,
            flexDirection: "row",
            backgroundColor: "#fff",
            ...Platform.select({
                ios: {
                    shadowColor: '#000',
                    shadowOpacity: 0.25,
                    shadowOffset: { width: 0, height: 2 },
                },
                android: {
                    elevation: 15,
                }
            }), justifyContent: "center", alignItems: "center"
        }}>
            <View style={{ alignItems: "flex-start", flexDirection: "row", width: "20%" }}>
                <Text style={{ fontSize: 12, marginTop: 5 }}>A</Text>
                <Text style={{ fontSize: 16 }}>A</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "center", width: "50%" }}>
                <AntDesign name="lock" size={20} color="gray" />
                <Text style={{ color: "#000" }}>soumari.com</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "flex-end", width: "20%" }}>
                <SimpleLineIcons name="refresh" size={20} color="gray" />
            </View>
        </SafeAreaView>
    )
}

export default Footer