import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Login } from "@screens/Login";

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

type AuthRoutes = {
  login: undefined;
  home: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
