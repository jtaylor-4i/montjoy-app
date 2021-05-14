
import { Colors } from '../styles/styles'
import { 
    DarkTheme as PaperDarkTheme, 
    DefaultTheme as PaperDefaultTheme
 } from 'react-native-paper'
import { 
    DarkTheme as NavDarkTheme, 
    DefaultTheme as NavDefaultTheme
} from '@react-navigation/native';
import merge from 'deepmerge';
import colors from '../../constants/Colors'

const mergedDefaultTheme = merge(PaperDefaultTheme, NavDefaultTheme);
const mergedDarkTheme = merge(PaperDefaultTheme, NavDarkTheme);

const { light } = Colors;
export const MontjoyDefaultTheme = {
    ...mergedDefaultTheme,
    colors: {
      ...mergedDefaultTheme.colors,
      primary: light.primary,
      accent: light.accent,
      card: light.bgColor,
      background: light.bgColor,
      text: light.fgColor,
      placeholder: light.placeholder,
    },
    
  }
const { dark } = Colors;
export const MontjoyDarkTheme = {
    ...mergedDarkTheme,
    colors: {
      ...mergedDarkTheme.colors,
      primary: dark.primary,
      accent: dark.accent,
      background: dark.bgColor,
      card: dark.bgColor,
      text: dark.fgColor,
      placeholder: dark.placeholder,
    },
  }