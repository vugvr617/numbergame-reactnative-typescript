import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface Props {
  text: string;
  textColor?: string;
  onPress?: () => void;
}

export default function CustomButton({text, textColor, onPress}: Props) {
  const styles = StyleSheet.create({
    buttonStyle: {
      color: textColor ? {textColor} : 'white',
      fontSize: 17,
      textAlign: 'center',
    },
    buttonInnerContainer: {
      backgroundColor: '#72063c',
      height: 40,
      borderRadius: 15,
      justifyContent: 'center',
    },
    buttonOuterContainer: {marginBottom: 10, borderRadius: 15},
  });

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        android_ripple={{color: '#640233'}}
        onPress={onPress}>
        <Text style={styles.buttonStyle}>{text}</Text>
      </Pressable>
    </View>
  );
}
