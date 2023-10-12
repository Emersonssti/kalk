import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Login } from "@screens/Login";
import { Profile } from "@screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

type AuthRoutes = {
  login: undefined;
  home: undefined;
  profile: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
