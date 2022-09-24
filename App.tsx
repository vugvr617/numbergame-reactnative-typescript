import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import StartingPage from './screens/StartingPage';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [number, setNumber] = useState();

  const numberSetter = (num) => {
    setNumber(num);
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        imageStyle={styles.backgroundImage}
        source={require('./assets/background.png')}
        resizeMode='cover'
        style={{flex: 1}}>
        {!number && <StartingPage numberSetter={numberSetter}></StartingPage>}
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
    opacity: 0.5
  },
});

export default App;
