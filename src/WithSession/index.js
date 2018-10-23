import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ListSongScreen from './ListSongScreen'
import VideoCallScreen from './VideoCallScreen'

const Main = createBottomTabNavigator({
	"List": { screen: ListSongScreen },
	"Video Call": { screen: VideoCallScreen }
}, { headerMode: "none" });
export default Main