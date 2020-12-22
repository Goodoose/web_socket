import React from 'react';
import {View} from 'react-native';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import styles from './MainScreenStyle';
import {dataType} from '../../store/data/dataTypes';

interface MainScreenViewType {
  points: dataType[],
}

const MainScreenView = ({points}: MainScreenViewType): JSX.Element => {
  const data = points.map(item => Math.round(item.value));

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <AreaChart
          style={styles.areaChart}
          data={data}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
          <Grid />
        </AreaChart>
      </View>
    </View>
  );
};

export default MainScreenView;
