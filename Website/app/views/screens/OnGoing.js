import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import { PrimaryButton } from '../components/Button';

const OnGoing = ({ navigation }) => {

    const [data, dataSet] = useState(null);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('http://192.168.100.176:1337/Pizza-Deliveries');
            response = await response.json();
            dataSet(response);
            console.log(response[0].Image[0].url);
        }

        fetchMyAPI();
    }, []);

    const OnGoing = ({ item }) => {
        return (
            <View style={style.historyCard}>
                <Image source={require('../../assets/meatPizza.png')} style={{ height: 80, width: 80 }} />
                {/* <Image source={item.image} style={{ height: 80, width: 80 }} /> */}
                <View
                    style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.Name}</Text>
                    <Text style={{ fontSize: 13, color: COLORS.grey }}>
                        On way
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: colors.primary }}>${item.Price}</Text>
                </View>
                <View style={{ marginRight: 20, alignItems: 'center' }}>
                    <Text style={{ color: COLORS.grey, fontSize: 12 }}>20min</Text>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>On Going</Text>
            </View>
            <View style={style.header}>
                <Text onPress={() => navigation.navigate('OrderHistory')} style={{ fontSize: 20, fontWeight: 'bold', color: 'silver' }} >   History </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>    Ongoing</Text>
            </View>
            {data !== null ? <><FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={data}
                renderItem={({ item }) => <OnGoing item={item} />}
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

export default OnGoing;
