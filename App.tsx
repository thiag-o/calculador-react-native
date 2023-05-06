import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
Display

export default function App() {

  const state = 0

  return (
    <View style={styles.container}>
      <Display value={state}/>
      <View style={styles.buttons}>
        <Button label='AC'/>
        <Button label='/'/>
        <Button label='7'/>
        <Button label='8'/>
        <Button label='9'/>
        <Button label='*'/>
        <Button label='4'/>
        <Button label='5'/>
        <Button label='6'/>
        <Button label='-'/>
        <Button label='1'/>
        <Button label='2'/>
        <Button label='3'/>
        <Button label='+'/>
        <Button label='0'/>
        <Button label='.'/>
        <Button label='='/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##f5fcff',
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
