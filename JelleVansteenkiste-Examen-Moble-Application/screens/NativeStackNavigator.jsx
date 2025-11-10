import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

export default function HomeApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}