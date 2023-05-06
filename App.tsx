import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import React from "react";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default function App() {
  const [state, setState] = React.useState(initialState);

  function addDigit(n: any) {
    if (n === "." && state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    const current = clearDisplay ? "" : state.displayValue;
    const displayValue = current + n;
    setState((value) => {
      return { ...value, displayValue, clearDisplay: false };
    });

    if (n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[state.current] = newValue;
      setState((value) => {
        return { ...value, values };
      });
    }
  }

  function clearMemory() {
    setState({ ...initialState });
  }

  function setOperation(ation: any) {
    // setDisplayValue(operation);
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##f5fcff",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
