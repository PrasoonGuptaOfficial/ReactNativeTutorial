/*
STOP WATCH TIMER APPLICATION
*/
import React, {useReducer, useRef} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface State {
  startTimerFlag: boolean;
  stopTimerFlag: boolean;
  resetTimerFlag: boolean;
  sec: number;
}

interface Action {
  type: string;
}

interface TimerIntervalIdRef {
  current: number | undefined | NodeJS.Timeout;
}

const initialState: State = {
  startTimerFlag: false,
  stopTimerFlag: false,
  resetTimerFlag: false,
  sec: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'start_timer':
      return {
        ...state,
        sec: state.sec + 1,
      };
    case 'stop_timer':
      return {
        ...state,
      };
    case 'reset_timer':
      return {
        ...state,
        sec: 0,
      };
    default:
      return state;
  }
};

function App(): React.JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  let timerIntervalIdRef: TimerIntervalIdRef = useRef();
  const onStartTimerHandler = () => {
    timerIntervalIdRef.current = setInterval(() => {
      dispatch({type: 'start_timer'});
    }, 1);
  };
  const onStopTimerHandler = () => {
    clearInterval(timerIntervalIdRef.current);
    dispatch({type: 'stop_timer'});
  };
  const onResetTimerHandler = () => {
    clearInterval(timerIntervalIdRef.current);
    dispatch({type: 'reset_timer'});
  };
  return (
    <SafeAreaView style={styles.mainAppView}>
      <Text style={styles.mainAppText}>STOP WATCH TIMER APP</Text>
      <View />
      <Text style={styles.timerText}>{state.sec}</Text>
      <Pressable onPress={onStartTimerHandler}>
        <Text>Start</Text>
      </Pressable>
      <Pressable onPress={onStopTimerHandler}>
        <Text>Stop</Text>
      </Pressable>
      <Pressable onPress={onResetTimerHandler}>
        <Text>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainAppView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainAppText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    color: 'black',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'normal',
    fontVariant: ['small-caps'],
    color: 'black',
    textAlign: 'center',
  },
});

export default App;
