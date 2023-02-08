// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      gray: {
        900: string;
        200: string;
        100: string;
      };
      danger: {
        light: string;
        main: string;
        dark: string;
      };
    };
  }
}
