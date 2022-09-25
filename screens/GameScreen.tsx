import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomTitle from '../components/customs/CustomTitle';
import CustomButton from '../components/customs/CustomButton';

interface Props {
  mainNumber: number;
}

const numberInfo = {
  maxValue: 100,
  minValue: 1,
};

export default function GameScreen({mainNumber}: Props) {
  const [randomNumber, setRandomNumber] = useState(
    Math.round(Math.random() * 100),
  );

  const showAlert = (): any => {
    Alert.alert("You're lying!", 'You know this is wrong.', [
      {text: 'Sorry!', style: 'cancel'},
    ]);
  };

  const infoChecker = (operation: string, num: number): boolean => {
    if (operation === 'more') {
      if (mainNumber < num) {
        return false;
      }
    } else if (operation === 'less') {
      if (mainNumber > num) {
        return false;
      }
    }
    return true;
  };

  const gameOverCheck = (num: number): boolean => {
    if (num === mainNumber) {
      return true;
    }
    return false;
  };

  const moreHandler = () => {
    if (!infoChecker('more', randomNumber)) {
      showAlert();
    } else {
      if (gameOverCheck(randomNumber)) {
        console.log('game over');
      } else {
        numberInfo.minValue = randomNumber;
        setRandomNumber(
          Math.round(
            Math.random() * (numberInfo.maxValue - numberInfo.minValue) +
              numberInfo.minValue,
          ),
        );
      }
    }
  };

  const lessHandler = () => {
    if (!infoChecker('less', randomNumber)) {
      showAlert();
    } else {
      if (gameOverCheck(randomNumber)) {
        console.log('game over');
      } else {
        numberInfo.maxValue = randomNumber;
        setRandomNumber(
          Math.round(
            Math.random() * (numberInfo.maxValue - numberInfo.minValue) +
              numberInfo.minValue,
          ),
        );
      }
    }
  };

  return (
    <View style={styles.gameContainer}>
      <CustomTitle title="Opponent's guess"></CustomTitle>
      <View>
        <Text style={styles.questionText}>Is this your number ?</Text>
      </View>
      <View style={styles.numberView}>
        <Text style={{textAlign: 'center', color: '#ddb52f', fontSize: 30}}>
          {randomNumber}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{width: 300}}>
          <CustomButton text="More" onPress={moreHandler}></CustomButton>
        </View>
        <View style={{width: 300}}>
          <CustomButton text="Less" onPress={lessHandler}></CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  questionText: {
    textAlign: 'center',
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 25,
    fontWeight: '700',
    color: '#640233',
    marginTop: 20,
  },
  numberView: {
    backgroundColor: '#640233',
    width: 70,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
    marginTop: 15,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    justifyContent: 'space-around',
  },
});
