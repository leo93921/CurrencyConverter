import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImage: {
        width: imageWidth,
        height: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: imageWidth / 2,
    },
    text: {
        color: '$white',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        fontWeight: '600',
    }
});