import { StatusBar } from 'expo-status-bar'
import { Stack, Redirect } from 'expo-router';

import Loader from "../../components/Loader";
import { useGlobalContext } from '../../context/GlobalProvider';

const AuthLayout = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name='sign-in'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='sign-up'
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <Loader isLoading={isLoading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default AuthLayout;