import logo from "./extensions/logo.svg";
import favicon from "./extensions/favicon.ico";
import "./extensions/styles/index.css";
import ru from "./extensions/translations/ru.json";

export default {
  config: {
    auth: {
      logo: logo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: logo,
    },
    theme: {
      colors: {
        primary100: "#fafcf7", primary200: "#e3f0d1", primary300: "#e3f0d1", primary400: "#7bb83c", 
        primary500: "#7bb83c", 
        primary600: "#7bb83c",
        primary700: "#67a32c",
        primary800: "#67a32c",
        alternative100: "#fafcf7",
        alternative200: "#e3f0d1",
        alternative300: "#e3f0d1",
        alternative400: "#7bb83c",
        alternative500: "#7bb83c",
        alternative600: "#7bb83c",
        alternative700: "#67a32c",
        alternative800: "#67a32c",
      },
    },
    locales: ["ru"],
    translations: {
      ru: ru,
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
