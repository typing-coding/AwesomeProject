import React, {Component} from 'react';
import {View, Image} from 'react-native';

let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
}

export default class FirstPropsScreen extends Component {
    render(){
        return <Image source={pic} style={{width: '100%', height: 110}} />
    }
}