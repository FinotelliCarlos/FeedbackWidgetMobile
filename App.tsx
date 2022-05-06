import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Widget } from './src/components/Widget';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Widget />
    </>
  );
}