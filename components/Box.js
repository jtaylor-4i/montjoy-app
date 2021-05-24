import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';


const Box = ({children}) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;
