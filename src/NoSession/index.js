import { createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

const Session = createBottomTabNavigator({
	"Log In": { screen: SignInScreen },
	"Sign Up": { screen:  SignUpScreen }
}, { headerMode: "none" });

export default Session