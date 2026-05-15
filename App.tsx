import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GlacierTrailsIcadventrestack from './GlacierTrailsIcadventre/GlacierTrailsIcadventrenav/GlacierTrailsIcadventrestack.tsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlacierTrailsIcadventrestack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
