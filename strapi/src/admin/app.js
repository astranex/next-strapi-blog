import logo from "./extensions/logo.svg";
import favicon from "./extensions/favicon.ico";
import "./extensions/styles/index.css";

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
        primary100: "#fafcf7",
        primary200: "#e3f0d1",
        primary300: "#e3f0d1",
        primary400: "#7bb83c",
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
      ru: {
        "app.components.LeftMenu.navbrand.title": "Админ-панель",
        "Auth.form.welcome.subtitle": "Войдите в свой аккаунт",
        "Auth.form.welcome.title": "Админ-панель",
        "global.change-password": "Изменить пароль",
        "Auth.form.currentPassword.label": "Текущий пароль",
        "global.password": "Пароль",
        "content-manager.header.name": "Контент",
        "content-manager.form.Input.sort.order":
          "Порядок сортировки по умолчанию",
        "global.delete": "Удалить",
        "app.components.Button.confirm": "Подтвердить",
        "global.search": "Поиск",
        "admin.pages.MarketPlacePage.search.placeholder": "Поиск",
        "components.Search.placeholder": "Поиск...",
        "content-manager.containers.Edit.information.created": "Создано",
        "content-manager.containers.Edit.information.by": "Автор",
        "content-manager.link-to-ctb": "Отредактировать модель",
        "input.placeholder":
          "Нажмите, чтобы добавить файл, или перетащите его в эту область",
        "mediaLibraryInput.placeholder":
          "Нажмите, чтобы добавить файл, или перетащите его в эту область",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Изменения предпочтений будут касаться только вас.",
        "Settings.profile.form.section.experience.mode.label":
          "Тема интерфейса",
        "Settings.profile.form.section.experience.mode.hint":
          "Отображает ваш интерфейс в выбранной теме.",
        "Settings.profile.form.section.experience.mode.option-label": "{name}",
        "content-manager.pages.ListView.header-subtitle":
          "{number, plural, =0 {# записей} one {# запись} other {# записей}} найдено",
        "content-manager.components.TableDelete.label":
          "{number, plural, one {# запись} other {# записей}} выбрано",
        "Settings.webhooks.to.delete":
          "{webhooksToDeleteLength, plural, one {# файл} other {# файлов}} выбрано",
        "list.assets.selected":
          "{number, plural, =0 {No asset} one {1 файл} other {# файлов}} готово к загрузке",
        "listView.headerLayout.description":
          "Создайте архитектуру данных вашего контента",
      },
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
