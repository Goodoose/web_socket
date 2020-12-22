import { ScaledSheet } from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const screenHeight = Dimensions.get("window").height;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    marginTop: 150,
  },

  areaChart: {
    height: screenHeight / 2,
  },
  text: {
    fontSize: '15@ms',
    color: 'blue',
  },
});

export default styles;
