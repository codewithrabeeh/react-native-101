import { View, Button } from "react-native"
const img = require('./assets/image.jpg')

export default function App() {

  return <View style={{ backgroundColor: "beige", flex: 1, padding: 60 }}>
    <Button title="Click Me"
      onPress={() => { console.log('Button Clicked') }}
      color={'black'} 
      disabled={true}
      />
  </View>
}