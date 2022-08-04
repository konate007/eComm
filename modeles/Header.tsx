import { Feather, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Dimensions, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Header = () => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='orange' />
            <TouchableOpacity style={{ paddingVertical: 15, backgroundColor: 'orange', justifyContent: 'center', marginTop: 5 }}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Appeler pour comander</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: "center" }}>
                <View style={{}}>
                    <Image source={require('../assets/logo.png')} style={{ width: 150, height: 30 }} />
                </View>
                <View style={{ width: 185, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => alert("Shopping Bag")} style={{ marginTop: 3 }}>
                        <AntDesign name="hearto" size={30} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("Bag...")} style={{ marginHorizontal: 5 }}>
                        <SimpleLineIcons name="handbag" size={30} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("User account")}>
                        <MaterialIcons name='person' size={30} color='green' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: 70, alignItems: 'center' }}
                    onPress={() => alert("Menu ...")}>
                    <MaterialIcons name='menu' size={40} color="green" />
                </TouchableOpacity>
                <View
                    style={styles.searchBar}
                >
                    {/* Input field */}
                    <TextInput
                        style={styles.input}
                        placeholder="Rechercher"
                        value={searchValue}
                        onChangeText={setSearchValue}
                    />
                    {/* search Icon */}
                    <View style={{ padding: 7, backgroundColor: "green" }}>
                        <Feather
                            name="search"
                            size={20}
                            color="#fff"
                            style={{ marginLeft: 1 }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    searchBar: {
        padding: 3,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: "flex-end",
    },
    input: {
        fontSize: 20,
        marginLeft: 5,
        paddingTop: -8,
        width: "80%",
    },

});


