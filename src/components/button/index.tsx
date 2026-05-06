import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { TextProps } from "react-native-svg";

function Button({ children }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Title>{children}</Title>
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text>{children}</Text>;
}

Button.Title = Title;

export { Button, Title };
