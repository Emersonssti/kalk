// import { Platform } from "react-native";

// import {
//   createBottomTabNavigator,
//   BottomTabNavigationProp,
// } from "@react-navigation/bottom-tabs";

// import { useTheme } from "native-base";

// import HomeSvg from "@assets/home.svg";
// import HistorySvg from "@assets/plus-circle.svg";
// import ProfileSvg from "@assets/user.svg";

// import { Home } from "@screens/Home";
// import { Create } from "@screens/Create";

// const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

// type AppRoutes = {
//   home: undefined;
//   create: undefined;
//   profile: undefined;
// };

// export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

// export function AppRoutes() {
//   const { sizes, colors } = useTheme();
//   const iconSizes = sizes[6];

//   return (
//     <Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: colors.green[500],
//         tabBarInactiveTintColor: colors.gray[200],
//         tabBarStyle: {
//           height: 56,
//           position: 'absolute',
//           bottom: 16,
//           right
//           borderTopWidth: 0,
//           marginBottom: 16,
//         },
//       }}
//     >
//       <Screen
//         name="home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <HomeSvg fill={color} width={iconSizes} height={iconSizes} />
//           ),
//         }}
//       />
//       <Screen
//         name="create"
//         component={Create}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <HistorySvg fill={color} width={iconSizes} height={iconSizes} />
//           ),
//         }}
//       />
//       <Screen
//         name="profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <ProfileSvg fill={color} width={iconSizes} height={iconSizes} />
//           ),
//         }}
//       />
//     </Navigator>
//   );
// }
