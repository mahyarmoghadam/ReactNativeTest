import { StatusBar } from "expo-status-bar";
import { Block } from "expo-ui-kit";
import React from "react";
import { Provider } from "react-redux";
import GenerateNumberContainer from "./components/GenerateNumberContainer";
import { store } from "./redux/store";
import { DefaultTheme, Provider as ProviderPaper } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <ProviderPaper theme={theme}>
        <Block flex>
          <GenerateNumberContainer />
        </Block>
      </ProviderPaper>
    </Provider>
  );
}
