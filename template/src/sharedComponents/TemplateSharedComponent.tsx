import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from 'src/theme';

interface templateProps {

}

const TemplateSharedComponent = (props: templateProps) => {
    return (
        <View>
            <Text>Template Shared Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default TemplateSharedComponent;