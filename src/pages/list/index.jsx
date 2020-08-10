import React, { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import pic1 from '../../static/1.jpg'

const app = getApp();

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReady() {
   
  }

  render () {
    return (
      <view>
      <view className="swiperBox">
          <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots={false}
          interval={1000}
          autoplay
          >
          <SwiperItem>
            <View className='swiperItem'>是</View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiperItem'>心</View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiperItem'>动</View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiperItem'>啊</View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiperItem'>
              <image mode="aspectFit" src={pic1}></image>
            </View>
          </SwiperItem>
          </Swiper>
      </view>
      </view>
    )
  }
}
