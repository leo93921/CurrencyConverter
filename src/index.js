import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from "./screens/Home";

EStyleSheet.build({
    $primaryColor: '#4f6d7a',
    $white: '#FFF'
});

export default () => <Home />;