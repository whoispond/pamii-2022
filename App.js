import React from "react";
import {
  Divider,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>

      <VStack space={5} alignItems="center">
        <Center
          >
          <Box mt={"100"} _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
          border="10" borderRadius="10">
            <VStack space="4" divider={<Divider />}>
              <Box px="4" pt="4">
                Whoispond
              </Box>
              <Box px="4">
                Noob em todos os jogos possiveis, mas sempre aprendendo e é isso que importa.
              </Box>
              <Box px="4" pb="4">
                amo: girl groups de kpop, jogar jogos como lol, fortnite e rpg.
                odeio: você que está lendo.
              </Box>
              <Box px="4" pb="4">
                Redes Sociais:
                ---
              </Box>
              <Box alignItems="center"> 
              <ToggleDarkMode />
              </Box>
              
            </VStack>
          </Box>
        </Center>
      </VStack>
     


    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
