import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/themes";
import MainLayout from "@/layouts";
import { Provider } from "react-redux";
import store from "@/reduxs/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </Provider>
  );
}
