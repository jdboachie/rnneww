import { Link } from 'expo-router';
import { View } from 'react-native';

import { Button } from './Button';

export default function Tabs() {
  return (
    <View className="flex flex-row justify-around gap-4 p-4">
      <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
        <Button title="A" />
      </Link>
      <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
        <Button title="B" />
      </Link>
      <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
        <Button title="C" />
      </Link>
      <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
        <Button title="D" />
      </Link>
      <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
        <Button title="E" />
      </Link>
    </View>
  );
}
