import { View, Text, Image, ImageBackground } from "react-native"
const img = require('./assets/image.jpg')

export default function App() {
  return <View style={{ backgroundColor: "beige", flex: 1, padding: 30 }}>
    {/* <Image source={img} style={{ width: 300, height: 300 }} />

    // Won't work if you pass without uri property!
    <Image source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }} style={{ width: 300, height: 300, marginTop: 10 }} /> */}

    {/* If there is no flex: 1 property, then image won't stretch entire screen */}
    <ImageBackground source={img} style={{ flex: 1 }}>
      <Text>Image Text</Text>
    </ImageBackground>
  </View>
}