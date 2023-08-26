import { View, Text, Image, ScrollView } from "react-native"
const img = require('./assets/image.jpg')

export default function App() {

  return <View style={{ backgroundColor: "beige", flex: 1, padding: 60 }}>
    {/* 
        ScrollView is used to scroll the content that overflow.
        Always wrap content inside View with ScrollView.
    */}
    
    <ScrollView>

      <Image source={img} style={{ width: 300, height: 300 }} />

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

      <Image source={img} style={{ width: 300, height: 300 }} />

    </ScrollView>

  </View>
}