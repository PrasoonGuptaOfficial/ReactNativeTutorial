/*
STOP WATCH TIMER APPLICATION
*/
import React, {useReducer, useRef} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface State {
  startTimerFlag: boolean;
  stopTimerFlag: boolean;
  resetTimerFlag: boolean;
  millisec: number;
  sec: number;
  min: number;
  hr: number;
  day: number;
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
  millisec: 0,
  sec: 0,
  min: 0,
  hr: 0,
  day: 0,
};

let startMillisecond = 0,
  startSecond = 0,
  startMinute = 0,
  startHour = 0,
  startDay = 0;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'start_timer':
      startMillisecond = state.millisec + 1;
      if (startMillisecond > 999) {
        startMillisecond = 0;
        startSecond = state.sec + 1;
      }
      if (startSecond > 59) {
        startSecond = 0;
        startMinute = state.min + 1;
      }
      if (startMinute > 59) {
        startMinute = 0;
        startHour = state.hr + 1;
      }
      if (startHour > 23) {
        startHour = 0;
        startDay = state.day + 1;
      }
      return {
        ...state,
        millisec: startMillisecond,
        sec: startSecond,
        min: startMinute,
        hr: startHour,
        day: startDay,
        startTimerFlag: true,
        stopTimerFlag: true,
        resetTimerFlag: true,
      };
    case 'stop_timer':
      return {
        ...state,
        startTimerFlag: false,
        stopTimerFlag: false,
        resetTimerFlag: true,
      };
    case 'reset_timer':
      return {
        ...state,
        millisec: 0,
        sec: 0,
        min: 0,
        hr: 0,
        day: 0,
        startTimerFlag: false,
        stopTimerFlag: false,
        resetTimerFlag: false,
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
  const onTwoDigitConversion = (digit: number) => {
    return digit.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  return (
    <SafeAreaView style={styles.mainAppView}>
      <Text style={styles.mainAppText}>STOP WATCH TIMER APP</Text>
      <View />
      <Text style={styles.timerText}>{`${onTwoDigitConversion(
        state.day,
      )}:${onTwoDigitConversion(state.hr)}:${onTwoDigitConversion(
        state.min,
      )}:${onTwoDigitConversion(state.sec)}:${onTwoDigitConversion(
        state.millisec,
      )}`}</Text>
      {!state.startTimerFlag && (
        <Pressable onPress={onStartTimerHandler}>
          <Text>Start</Text>
        </Pressable>
      )}
      {state.stopTimerFlag && (
        <Pressable onPress={onStopTimerHandler}>
          <Text>Stop</Text>
        </Pressable>
      )}
      {state.resetTimerFlag && (
        <Pressable onPress={onResetTimerHandler}>
          <Text>Reset</Text>
        </Pressable>
      )}
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
