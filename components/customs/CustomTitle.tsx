import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  title: string;
}

export default function CustomTitle({title}: Props) {
return (
  <View>
    <Text style={{textAlign: 'center', color: '#4e0329', fontWeight: '700', fontSize: 35}}>{title}</Text>
  </View>
);
}
