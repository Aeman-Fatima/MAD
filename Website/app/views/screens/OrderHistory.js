import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import { PrimaryButton } from '../components/Button';

const OrderHistory = ({ navigation }) => {

    const [data, dataSet] = useState(null)

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('http://localhost:1337/Pizza-Deliveries')
            response = await response.json()
            dataSet(response)
        }

        fetchMyAPI()
    }, [])

    const OrderHistory = ({ item }) => {
        console.log(item.Image[0].formats.url)

        return (

            <View style={style.historyCard}>
                <Image source={require('../../assets/meatPizza.png')} style={{ height: 80, width: 80 }} />
                {/* <Image source={"http://localhost:1337" + item.Image[0].formats.url} style={{ height: 80, width: 80 }} /> */}
                <View
                    style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.Name}</Text>
                    <Text style={{ fontSize: 13, color: COLORS.grey }}>
                        Completed
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.primary }}>${item.Price}</Text>
                </View>
                <View style={{ marginRight: 20, alignItems: 'center' }}>
                    <Text style={{ color: COLORS.grey, fontSize: 12 }}>3hrs</Text>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text onPress={navigation.goBack} style={{ fontSize: 20, fontWeight: 'bold' }}>Back</Text>
            </View>
            <View style={style.header}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>History   </Text>
                <Text onPress={() => navigation.navigate('OnGoing')} style={{ fontSize: 20, fontWeight: 'bold', color: 'silver' }} >   Ongoing </Text>
                {/* <Button  onPress={() => navigation.navigate('OnGoing')}> Ongoing</Button> */}
            </View>
            {data !== null ? <><FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={data}
                renderItem={({ item }) => <OrderHistory item={item} />}
                ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
            /></> : <></>
            }
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    historyCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default OrderHistory;
