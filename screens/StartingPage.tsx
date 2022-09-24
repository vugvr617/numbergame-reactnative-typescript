import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import CustomButton from '../components/customs/CustomButton';

interface Props {
  numberSetter: (arg: number) => void;
}

export default function StartingPage({numberSetter}: Props) {
  const [number, setNumber] = useState();

  const resetInput = () => {
    setNumber('')
  }

  const confirmHandler = () => {
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInput}]
      )
    } else {
      numberSetter(number); 
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={number}
          onChangeText={(value) => {
            setNumber(parseInt(value));
          }}></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{width: 120}}>
          <CustomButton onPress={resetInput} text="Reset" />
        </View>
        <View style={{width: 120}}>
          <CustomButton onPress={confirmHandler} text="Confirm" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#4e0329',
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginTop: 100,
    borderRadius: 8,
    minHeight: 180,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  numberInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    color: '#ddb52f',
    fontSize: 25,
    fontWeight: '700',
    width: 40,
    padding: 5,
  },
  buttonContainer: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
