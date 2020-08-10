import React, { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

const app = getApp();

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userInfo: {},
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReady() {
    wx.getUserInfo({
      success:res=>{
        this.setState({userInfo: res.userInfo});
      }
    })
  }

  render () {
    const userInfo = this.state.userInfo;
    return (
      <view>
        <View className='index'>
          <image mode="aspectFit" src={userInfo.avatarUrl}></image>
          <view>
            <view>{userInfo.nickName}</view>
            <view className="welcome">欢迎</view>
          </view>
        </View>
      </view>
    )
  }
}
