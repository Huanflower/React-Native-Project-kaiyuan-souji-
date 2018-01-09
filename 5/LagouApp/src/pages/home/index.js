import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

//components
import HomeHeader from './header';

export default class Page1 extends Component {
	render() {
		return (
			<View>
				<HomeHeader/>
				<Text onPress={Actions.tab2}>This is PageOne!</Text>
			</View>
		)
	}
}

const styles =  {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
} ;
