import React, { useEffect, useState } from 'react';
import MainScreenView from './MainScreenView';
import {useDispatch, useSelector} from 'react-redux';
import {w3cwebsocket as W3CWebSocket} from 'websocket';
import {setDataRequest} from '../../store/data/dataActions';
import {StateType} from '../../store/reducers';
import {dataType} from '../../store/data/dataTypes';

const MainScreenContainer = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const client = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');
    client.onmessage = function(e) {
      if (typeof e.data === 'string') {
        dispatch(setDataRequest(JSON.parse(e.data)));
      }
    };
  }, []);

  const data = useSelector((state: StateType) => state.data.data);
  const [points, setPoints] = useState<dataType[]>([]);

  useEffect(() => {
    if (points.length > 10) {
      setPoints([...points.slice(1), ...data]);
    } else {
      setPoints([...points, ...data]);
    }
  }, [data]);

  return (
    <MainScreenView points={points}/>
  );
};

export default MainScreenContainer;
