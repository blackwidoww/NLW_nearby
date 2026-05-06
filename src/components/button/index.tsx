import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { TextProps } from "react-native-svg";

function Button({ children, style }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Title>{children}</Title>
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

Button.Title = Title;

export { Button, Title };
