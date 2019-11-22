import {Card,ListItem, Button, ThemeProvider,Icon,Avatar, Badge, withBadge} from 'react-native-elements';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabNavigator from 'react-native-tab-navigator';
import {SocialIcon} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import MyButtons from './component/MyButtons'
import MyTabNav from './component/MyTabNav'
const theme = {
  Button: {
    raised: true,
  },
};
const avatar_url="http://www.mytimer.cn/assets/img/qrcode.png";
const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
];
const users = [
  {
     name: 'brynn',
     avatar: {avatar_url}
  },
]

const App = () => {
  return (
    <>
    <SafeAreaView>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
    <ThemeProvider theme={theme}>
      <Button title="Hey!" />
      <SocialIcon type='twitter' />
      <SocialIcon raised={false} type='gitlab' />
      <SocialIcon light type='medium' />
      <SocialIcon light raised={false} type='medium' />
      <View>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
            />
          ))
        }
      </View>
      <View>
        <Avatar rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="large"
        />
        <Badge
          status="success"
          containerStyle={{ position: 'absolute', top: 4, left:54}}
        />
        <Badge value="99+" status="error"  containerStyle={{ position: 'absolute', bottom: 5, left:54}} />
      </View>
      <View>
        <Badge value="99+" status="error" />
        <Badge value={<Text>My Custom Badge</Text>} />

        <Badge status="success" />
        <Badge status="error" />
        <Badge status="primary" />
        <Badge status="warning" />
      </View>
      <Card
        title='HELLO WORLD'
        image={require('./assets/images/avatar1.jpg')} containerStyle={{padding: 0,borderRadius:20,marginBottom:10}} >
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon raised name='heartbeat' type='font-awesome' color='#f50' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>

      <Button title="My 2nd Button" />
      <MyButtons selectedIndex="1" />
    </ThemeProvider>
    </ScrollView>
    </SafeAreaView>
    <MyTabNav selectedTab="home" />
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    padding:5
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default App;
