import { View, Text, Image, Pressable } from "react-native"
const img = require('./assets/image.jpg')

export default function App() {

  return <View style={{ backgroundColor: "beige", flex: 1, padding: 60 }}>

    {/* 
      pressable is a react-native component to detect various types of presses (interactions)
      on it's children component. It can be used to detect a simple tap, long press, etc.
    */}

      <Pressable onPressOut={() => {console.log('Image Clicked')}}>
      <Image source={img} style={{ width: 300, height: 300 }} />
      </Pressable>

      <Pressable onPress={() => {console.log('Text Clicked')}} >
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequatur voluptate quas doloribus quidem. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequatur voluptate
        quas doloribus quidem. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequatur voluptate quas doloribus quidem.
        Quisquam voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequatur voluptate quas doloribus quidem. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequatur voluptate
        quas doloribus quidem. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequatur voluptate quas doloribus quidem.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequatur voluptate quas doloribus quidem. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequatur voluptate
        quas doloribus quidem. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequatur voluptate quas doloribus quidem.
        Quisquam voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequatur voluptate quas doloribus quidem. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequatur voluptate
        quas doloribus quidem. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequatur voluptate quas doloribus quidem.
      </Text>
      </Pressable>

  </View>
}