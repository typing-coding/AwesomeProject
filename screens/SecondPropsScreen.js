import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Greeting extends Component {
    render(){
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name}</Text>
            </View>
        )
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', top: 50}}>
                <Greeting name="Jone" />
                <Greeting name="Jane" />
                <Greeting name="Smith" />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
