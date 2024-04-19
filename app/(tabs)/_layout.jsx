import { View, Text, Image } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';
import Loader from '../../components/Loader';
import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({icon, color, name, focussed}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focussed ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>{name}</Text>
    </View>
  )
}

const TabLayout = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && !isLoggedIn) return <Redirect href="/sign-in" />;
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 72
          }
        }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focussed}) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focussed={focussed}
                name="Home"
              />
            )
          }}
        />
        <Tabs.Screen 
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({color, focussed}) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                focussed={focussed}
                name="Bookmark"
              />
            )
          }}
        />
        <Tabs.Screen 
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({color, focussed}) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                focussed={focussed}
                name="Create"
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focussed}) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focussed={focussed}
                name="Profile"
              />
            )
          }}
        />
      </Tabs>
      <Loader isLoading={isLoading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
};

export default TabLayout;