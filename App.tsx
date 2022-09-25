import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import StartingPage from './screens/StartingPage';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [number, setNumber] = useState<number | null>();

  const numberSetter = (num:number) => {
    setNumber(num);
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          {!number && <StartingPage numberSetter={numberSetter}></StartingPage>}
          {number && <GameScreen mainNumber={number}></GameScreen>}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
  backgroundImage: {
    opacity: 0.3,
  },
});

export default App;
