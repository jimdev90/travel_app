import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ReusableText = ({text, family, size, color}) => {
    return (
        <Text style={styles.textStyle(family, size, color)}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyle: (family, size, color) => ({
        fontFamily: family,
        fontSize: size,
        color: color
    }),
});
export default ReusableText;
