import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Colors,} from 'react-native/Libraries/NewAppScreen';
import TabNavigator from 'react-native-tab-navigator';

class MyTabNav extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: "home"}
    }
    
    render () {
      const type = this.state.selectedTab;
      return (
        <TabNavigator>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="业务服务"
            selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
            renderIcon={() => <Image style={styles.icon} source={require('../assets/images/home.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#007aff'}]} source={require('../assets/images/home.png')} />}//设置图标选中颜色
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.pages1}>
                <Text>这是首页</Text>
            </View>
        </TabNavigator.Item>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'shebei'}
            title="设备列表"
            selectedTitleStyle={{color:"#007aff"}}
            badgeText="1"
            renderIcon={() => <Image style={styles.icon} source={require('../assets/images/search.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#007aff'}]} source={require('../assets/images/search.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'shebei' })}>
            <View style={styles.pages2}>
                <Text>设备列表</Text>
            </View>
        </TabNavigator.Item>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'hetong'}
            title="合同管理"
            selectedTitleStyle={{color:"#007aff"}}
            renderIcon={() => <Image style={styles.icon} source={require('../assets/images/settings.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#007aff'}]} source={require('../assets/images/settings.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'hetong' })}>
            <View style={styles.pages3}>
                <Text>合同管理</Text>
            </View>
        </TabNavigator.Item>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'qiye'}
            title="企业信息"
            selectedTitleStyle={{color:"#007aff"}}
            renderIcon={() => <Image style={styles.icon} source={require('../assets/images/googleg_standard_color_18.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#007aff'}]} source={require('../assets/images/googleg_standard_color_18.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'qiye' })}>
            <View style={styles.pages4}>
                <Text>个人中心</Text>
            </View>
        </TabNavigator.Item>
        </TabNavigator>
      )
    }
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
      padding:5
    },
});
export default MyTabNav;
