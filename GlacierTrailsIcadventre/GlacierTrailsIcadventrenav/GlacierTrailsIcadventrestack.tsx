import {createStackNavigator} from '@react-navigation/stack';

import GlacierTrailsIcadventretab from '../../GlacierTrailsIcadventretab.tsx';
import GlacierTrailsIcadventreloadr from '../GlacierTrailsIcadventrecmp/GlacierTrailsIcadventreloadr.tsx';
import GlacierTrailsIcadventreonb from '../GlacierTrailsIcadventrescrn/GlacierTrailsIcadventreonb.tsx';

const Stack = createStackNavigator();

const GlacierTrailsIcadventrestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="GlacierTrailsIcadventreloadr"
        component={GlacierTrailsIcadventreloadr}
      />
      <Stack.Screen
        name="GlacierTrailsIcadventreonb"
        component={GlacierTrailsIcadventreonb}
      />
      <Stack.Screen
        name="GlacierTrailsIcadventretab"
        component={GlacierTrailsIcadventretab}
      />
    </Stack.Navigator>
  );
};

export default GlacierTrailsIcadventrestack;
