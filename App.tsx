import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageCarousel from './components/ImageCarousel';
import dataContent from './consts/dataContent';
import dataFooter from './consts/dataFooter';
import Footer from './modeles/Footer';
import Header from './modeles/Header';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ height: 280 }}>
        <ImageCarousel data={dataContent} />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'green' }}>Top categories</Text>
      </View>
      <View style={styles.separator} />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      }} horizontal={true} nestedScrollEnabled={true}>
        {dataFooter?.map((val: any) =>
          <TouchableOpacity
            onPress={() => alert(val.name)}
            style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Image source={val.image} style={{ width: 80, height: 80, marginHorizontal: 5, }} key={val.id} />
            <Text style={{ textAlign: 'center', fontSize: 12, color: 'gray' }}>{val.name}</Text>
          </TouchableOpacity>)}
      </ScrollView>
      <Footer />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  cartCard: {
    flex: 1,
    height: '60@s',
    elevation: 2,
    borderRadius: 15,
    backgroundColor: 'white',
    marginHorizontal: '8@s',
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        marginVertical: Platform.OS === 'ios' &&
          Dimensions.get('window').width >= 744 &&
          Dimensions.get('window').height <= 1366 ? 15 : 20
      },
      android: {
        marginVertical: 15
      }
    }),
  },

  separator: {
    borderWidth: 1,
    width: '90%',
    borderColor: '#fff',
    elevation: 2,
    marginTop: 10,
    alignItems: "center",
    marginLeft: 22,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
      }
    })
  }
});


