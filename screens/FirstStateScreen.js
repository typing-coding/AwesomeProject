import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {isShowingText: true};

        setInterval(()=>{
            this.setState( previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        },1000);
    }
    render() {
        if(!this.state.isShowingText){
            return null;
        }
        return (
            <Text>{this.props.text}</Text>
        )
    }
}

export default class FirstStateScreen extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'yellow'}}>
                <Blink text="블링크 테스트" />
                <Blink text="깜빡여주세요!" />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
