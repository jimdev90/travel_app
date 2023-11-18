import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Slides from "../../components/Onboard/Slides";

const Onboarding = () => {
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: 'Find the perfect place stay'
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: 'Discover the world'
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: 'Find the best Hotels in the world'
        },
    ];
    return (
        <FlatList
            data={slides}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Slides item={item} />}
        />


    );
};

export default Onboarding;
