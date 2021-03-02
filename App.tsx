import React, { FC, createContext, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import Home from './pages/Home';

interface IPageIndex {
  [key: string]: JSX.Element
}

type PageContextType = React.Dispatch<React.SetStateAction<string>>;
const PageContext = createContext<PageContextType | null>(null);

const App: FC = () => {
  const [pageIndex, setPage] = useState('home');

  const pages: IPageIndex = {
    home: <Home />
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <PageContext.Provider value={setPage}>
        {pages[pageIndex]}
      </PageContext.Provider>
      <StatusBar style="light" />
    </View>
  );
}

export { PageContext };
export default App;

// #312d2c
// #1c1c1a

// #779756
// #eeeed2

// #ffffff
// #bcbab8

// #e6902d