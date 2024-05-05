import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  /*
    Тип приложения
    appType: 'spa' | 'mpa' | 'custom' (default: 'spa')

    https://vitejs.dev/config/shared-options.html#apptype
  */
  appType: "spa",

  /*
    Тут можно дополнительно указать форматы, которые стоит обрабатывать как статику,
    вне папки public.
    Список расширений, которые vite понимает как статику https://github.com/vitejs/vite/blob/main/packages/vite/src/node/constants.ts#L80
    assetsInclude: string | RegExp | (string | RegExp)[]
    
    https://vitejs.dev/config/shared-options.html#assetsinclude
  */
  assetsInclude: [],

  /*
    Base public path для приложения, добавляется после port через /
    Например http://localhost:5173/test (base: "test")
    base: string

    https://vitejs.dev/config/shared-options.html#base
  */
  base: "",

  /*
    Каталог для сохранения файлов кэша
    cacheDir: string (default: "node_modules/.vite")

    https://vitejs.dev/config/shared-options.html#cachedir
  */
  cacheDir: "node_modules/.vite",

  /*
    Очистка чего? (что-то делает с консолью)
    clearScreen: boolean (default: true)

    https://vitejs.dev/config/shared-options.html#clearscreen
  */
  clearScreen: true,

  /*
    Путь до папки с файлом конфигурации .env
    envDir: string (default: root)

    https://vitejs.dev/config/shared-options.html#envdir
  */
  envDir: "",

  /*
    Префикс для переменных окружения
    envPrefix: string (default: VITE_)

    Нельзя использовать '', vite выдаст ошибку. Чтобы убрать префикс смотри define

    https://vitejs.dev/config/shared-options.html#envprefix
  */
  envPrefix: "VITE_",

  logLevel: "warn",

  legacy: {},

  json: {},

  html: {},

  experimental: {},

  esbuild: {},

  define: {},

  customLogger: {
    info: () => {},
    warn: () => {},
    warnOnce: () => {},
    error: () => {},
    clearScreen: () => {},
    hasErrorLogged: (error) => {
      return true;
    },
    hasWarned: true,
  },

  css: {},

  build: {},

  plugins: [react()],
});
