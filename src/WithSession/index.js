import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ListSongScreen from './ListSongScreen'

const Main = createBottomTabNavigator({
	"List": { screen: ListSongScreen }
}, { headerMode: "none" });
export default Main