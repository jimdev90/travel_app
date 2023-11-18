import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SIZES} from "../../constants/theme";

const ReusableBtn = ({onPress, btnText, textColor, width, backGroundColor, borderWidth, borderColor}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle(width, backGroundColor, borderWidth, borderColor)}
        >
            <Text style={styles.btnText(textColor)}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnText: (textColor) => ({
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        color: textColor
    }),
    btnStyle: (width, backGroundColor, borderWidth, borderColor) => ({
        backgroundColor: backGroundColor,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: SIZES.small,
        borderColor: borderColor,
        borderWidth: borderWidth,

    })
});
export default ReusableBtn;
