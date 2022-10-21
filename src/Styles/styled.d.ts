import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bgColor: string;
      textColor: string;
      elementColor: string;
      shadowColor: string;
      lotto1: string;
      lotto2: string;
      lotto3: string;
      lotto4: string;
      lotto5: string;
    };
  }
}
