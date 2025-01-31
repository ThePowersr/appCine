import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    height: 56,
    borderRadius: 64,
  },
  buttonSecondary: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 64,
    height: 56,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
  },
  textSecondary: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
  }
});

export default styles;