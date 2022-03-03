import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import Header from "./src/components/Header";
import AlbumDetail from "./src/components/AlbumDetail";
import albumData from "./src/json/albums.json";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header title={albumData.albumTitle} />
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => <AlbumDetail album={item} />}
      keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

export default App;
