import React from 'react';

import {Image, View} from 'react-native';
import {HeightSpacer, ReusableBtn, ReusableText} from '../../components';
import styles from "./slides.style";
import {COLORS, SIZES} from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Slides = ({item}) => {

    const navigation = useNavigation();

    return (
        <View>
            <Image source={item.image} style={styles.image}/>
            <View style={styles.stack}>
                <ReusableText
                    text={item.title}
                    family={'medium'}
                    size={SIZES.xLarge}
                    color={COLORS.white}
                />
                <HeightSpacer height={40} />
                <ReusableBtn
                    onPress={() => navigation.navigate('Bottom')}
                    btnText="Let's go"
                    width={(SIZES.width - 50) / 2.2}
                    backGroundColor={COLORS.red}
                    borderColor={COLORS.red}
                    borderWidth={0}
                    textColor={COLORS.white}
                />
            </View>
        </View>
    );
};

export default Slides;
