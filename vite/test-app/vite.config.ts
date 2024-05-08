import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// https://v3.vitejs.ru/config/ - ссылка на доку по конфигу на русском языке (некоторые моменты устарели, не рекомендую опираться на нее как на источник)

export default defineConfig(({ mode }) => ({
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
  //   assetsInclude: [],

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
  //   envDir: "",

  /*
      Префикс для переменных окружения
      envPrefix: string (default: VITE_)

      Нельзя использовать '', vite выдаст ошибку. Чтобы убрать префикс смотри define

      https://vitejs.dev/config/shared-options.html#envprefix
  */
  envPrefix: "VITE_",

  /*
      Уровень детализации вывода в консоль

      logLevel: 'info' | 'warn' | 'error' | 'silent' (default: 'info')

      https://vitejs.dev/config/shared-options.html#loglevel
  */
  logLevel: "info",

  /*
      Тип сборки. Значение также можно переопределить с помощью --mode в CLI

      mode: 'development' | 'production' (default: 'development' for serve, 'production' for build)

      https://vitejs.dev/config/shared-options.html#mode
  */
  mode,

  /*
      Путь к папке со статикой

      mode: string | false (default: "public")

      https://vitejs.dev/config/shared-options.html#publicdir
  */
  publicDir: "public",

  /*
      Путь к файлу index.html

      mode: string (default:  process.cwd())

      https://vitejs.dev/config/shared-options.html#root  
  */
  // root,

  // Опции для локального запуска (dev-server)
  // https://vitejs.dev/config/server-options.html#server-options

  server: {
    /* 
        URL для dev-server который мы хотим запустить. 
        Зачем значение true подробнее - тут https://learn.microsoft.com/en-us/windows/wsl/networking#accessing-a-wsl-2-distribution-from-your-local-area-network-lan
        Можно установить с помощью CLI параметром --host value

        host: string | boolean (default: 'localhost')

        https://vitejs.dev/config/server-options.html#server-host
    */
    host: "localhost",

    /*
        Порт

        port: number (default: 5173)

        https://vitejs.dev/config/server-options.html#server-port
    */
    port: 3001,

    /*
        Если порт (например 3001) уже занят, то при значении strictPort: true, выдаст ошибку.
        Иначе займет другой свободный порт

        port: boolean

        https://vitejs.dev/config/server-options.html#server-port
    */
    strictPort: true,

    /*
        Включаем TLS + HTTP/2
        Примечание, чтобы использовать TLS соединение нужно еще указать параметр server.proxy

        https: Значение также может быть объектом параметров, передаваемым в https.createServer(). 
        https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener

        Нужен действительный secure сертификат 
        https://vitejs.dev/config/server-options.html#server-https
    */
    // https: {},

    /*
        Автоматически открывает браузер при запуске сервера

        open: boolean | string

        Если строка то будет использоваться как URL

        Можно настраивать всякии опции, подробнее тут https://github.com/sindresorhus/open#app

        https://vitejs.dev/config/server-options.html#server-open    
    */
    open: true,

    /*
        Правила прокси-сервера для сервера разработки

        перехватывает запросы на ключи и перенаправялет на значения.

        // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
        '/foo': 'http://localhost:4567'

        proxy: Record<string, string | ProxyOptions>
        
        https://vitejs.dev/config/server-options.html#server-proxy 
    */
    // proxy: {},

    /*
        CORS для dev сервера

        cors: boolean | CorsOptions  (default: true)

        подробнее тут https://github.com/expressjs/cors#configuration-options
        
        https://vitejs.dev/config/server-options.html#server-cors
    */
    cors: true,

    /*
        Для настройки заголовков, которые приходят с сервера.

        headers: OutgoingHttpHeaders
        
        https://v3.vitejs.ru/config/server-options.html#server-headers
    */
    // headers: {},

    /*
        HMR 

        headers: boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean, clientPort?: number, server?: Server }
        (default: true)

        https://vitejs.dev/config/server-options.html#server-hmr
    */
    hmr: true,

    /*
        Эти файлы будут преобразованы и кешированы предварительно, для быстрой загрузки.
        Улучшает начальную загрузку страницы во время запуска сервера

        warmup: { clientFiles: string[], ssrFiles: string[] }

        string - относительный от root путь до файла.

        Например 

        {
          clientFiles: ['./src/components/*.vue', './src/utils/big-utils.js'],
          ssrFiles: ['./src/server/modules/*.js'],
        }

        https://vitejs.dev/config/server-options.html#server-warmup
    */
    // warmup: { clientFiles: [], ssrFiles: [] },

    /*
        Для настройки просматриваемых файлов при HMR.
        Если null то файлы просматриваться не будут. По умолчанию exclude .git/ и node_modules/

        watch: object | null

        Подробнее тут https://github.com/paulmillr/chokidar#api

        https://vitejs.dev/config/server-options.html#server-watch   
    */
    // watch: {},

    /*
        Создает сервер Vite в режиме мидлвара. 

        middlewareMode: boolean  (default: false)
      
        https://vitejs.dev/config/server-options.html#server-middlewaremode
     */
    // middlewareMode: false,

    fs: {
      /*
        Ограничить обслуживание файлов за пределами корня рабочей области.

        strict: boolean  (default: true)
      
        https://vitejs.dev/config/server-options.html#server-fs-strict
     */
      strict: true,

      /*
        Ограничить файлы, которые можно обслуживать через /@fs/

        allow: string[]
      
        Если strict: true, то этот параметр не устанавливать, будет ошибка

        https://vitejs.dev/config/server-options.html#server-fs-allow     
      */
      allow: [],

      /*
        Черный список для конфиденциальных файлов, обслуживание которых ограничено сервером Vite dev

        deny: string[] (default ['.env', '.env.*', '*.{pem,crt}'])
      
        https://vitejs.dev/config/server-options.html#server-fs-deny
      */
      deny: [".env", ".env.*", "*.{pem,crt}"],
    },

    /*
        Определяет источник сгенерированных URL-адресов активов во время разработки.

        origin: string
      
        https://vitejs.dev/config/server-options.html#server-origin      
    */
    origin: "",

    /*
        Функция для добавления в игнор путей содержащих указанные значения

        sourcemapIgnoreList: false | (sourcePath: string, sourcemapPath: string) => boolean
      
        https://vitejs.dev/config/server-options.html#server-sourcemapignorelist   

        default : (sourcePath) => sourcePath.includes('node_modules')
    */
    sourcemapIgnoreList: (sourcePath) => sourcePath.includes("node_modules"),
  },

  // Опции для сервера, запускаемого с помощью vite preview (то, что собрали в папке с билдом)

  preview: {
    /* 
        URL для dev-server который мы хотим запустить. 
        Зачем значение true подробнее - тут https://learn.microsoft.com/en-us/windows/wsl/networking#accessing-a-wsl-2-distribution-from-your-local-area-network-lan
        Можно установить с помощью CLI параметром --host value

        host: string | boolean (default: 'localhost')

        https://vitejs.dev/config/preview-options.html#preview-host
    */
    host: "localhost",

    /*
        Порт
    
        port: number (default: 5173)
    
        https://vitejs.dev/config/preview-options.html#preview-port
    */
    port: 3001,

    /*
        Если порт (например 3001) уже занят, то при значении strictPort: true, выдаст ошибку.
        Иначе займет другой свободный порт
    
        port: boolean
    
        https://vitejs.dev/config/preview-options.html#preview-strictport
    */
    strictPort: true,

    /*
        Включаем TLS + HTTP/2
        Примечание, чтобы использовать TLS соединение нужно еще указать параметр server.proxy
    
        https: Значение также может быть объектом параметров, передаваемым в https.createServer(). 
        https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener
    
        Нужен действительный secure сертификат 
        https://vitejs.dev/config/server-options.html#server-https
    */
    https: {},

    /*
        Автоматически открывает браузер при запуске сервера
    
        open: boolean | string
    
        Если строка то будет использоваться как URL
    
        Можно настраивать всякии опции, подробнее тут https://github.com/sindresorhus/open#app
    
        https://vitejs.dev/config/preview-options.html#preview-open
    */
    open: true,

    /*
        Правила прокси-сервера для сервера разработки

        перехватывает запросы на ключи и перенаправялет на значения.

        // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
        '/foo': 'http://localhost:4567'

        proxy: Record<string, string | ProxyOptions>
        
        https://vitejs.dev/config/preview-options.html#preview-proxy
    */
    proxy: undefined,

    /*
        CORS для preview сервера
    
        cors: boolean | CorsOptions  (default: true)
    
        подробнее тут https://github.com/expressjs/cors#configuration-options
            
        https://vitejs.dev/config/preview-options.html#preview-cors
    */
    cors: true,

    /*
        Для настройки заголовков, которые приходят с сервера.
    
        headers: OutgoingHttpHeaders
            
        https://vitejs.dev/config/preview-options.html#preview-headers
    */
    headers: undefined,
  },

  build: {
    /*
        Указываем для чего собираем билд.
     
        target: string | string[]  (default: "modules" - для браузеров с нативными модулями ES, нативным динамическим импортом ESM и import.meta)

        chrome, deno, edge, firefox, hermes, ie, ios, node, opera, rhino, safari
        подробнее тут https://esbuild.github.io/api/#target

        https://vitejs.dev/config/build-options.html#build-target
    */
    target: "modules",

    /*     
        modulePreload: boolean | { polyfill?: boolean, resolveDependencies?: ResolveModulePreloadDependenciesFn }  (default: { polyfill: true })

        https://vitejs.dev/config/build-options.html#build-modulepreload
    */
    modulePreload: {
      polyfill: true,
    },

    /*     
        root для билда

        outDir: string (default: "dist")

        https://vitejs.dev/config/build-options.html#build-outdir
    */
    outDir: "dist",

    /*     
        Куда складываем результаты билда (сгенерированные чанки и бандлы)

        assetsDir: string (default: "assets")

        путь относительно outDir, т.е. по дефолту process.cwd()/dist/assets

        https://vitejs.dev/config/build-options.html#build-assetsdir
    */
    assetsDir: "assets",

    /*     
        Все ресурсы, которые весят меньше этого значения будут переведены в base64 и использованы inline.
        Т.е. для них не будет отдельного запроса во вкладке network

        assetsInlineLimit: number |((filePath: string, content: Buffer) => boolean | undefined) - (default: 4096 (4 КБ))

        https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
    */
    assetsInlineLimit: 4096,

    /*     
        Регулирует разделение css кода. Если false - то весь css будет собран в один файл, включая асинхронные модули (подключенные через lazy)

        cssCodeSplit: boolean - (default: true)

        Если указать build.lib => default будет false

        https://vitejs.dev/config/build-options.html#build-csscodesplit
    */
    cssCodeSplit: true,

    /*     
        Все ресурсы, которые весят меньше этого значения будут переведены в base64 и использованы inline.
        Т.е. для них не будет отдельного запроса во вкладке network

        cssTarget: string | string[] - (default: build.target)

        https://vitejs.dev/config/build-options.html#build-csstarget
    */
    cssTarget: "modules",

    /*     
        Для регулировки минимизации css

        cssMinify: boolean | 'esbuild' | 'lightningcss' - (default: build.minify)

        https://vitejs.dev/config/build-options.html#build-cssminify
    */
    cssMinify: true,

    /*     
        Отображение исходных текстов программы (не минимизированных)

        Если 'inline', исходная карта будет добавлена ​​к результирующему выходному файлу как URI данных
        'hidden'работает аналогично, trueза исключением того, что соответствующие комментарии исходной карты в связанных файлах подавляются.

        cssMinify: boolean | 'inline' | 'hidden' - (default: false)

        https://vitejs.dev/config/build-options.html#build-sourcemap
    */
    sourcemap: false,

    /*     
        Опции для сборщика rollup, который используется в build сборке

        rollupOptions: RollupOptions 

        подробнее тут - https://rollupjs.org/configuration-options/

        https://v3.vitejs.ru/config/build-options.html#build-rollupoptions
    */
    rollupOptions: {},

    /*     
        Опции для плагина rollup @rollup/plugin-commonjs

        rollupOptions: RollupCommonJSOptions  

        подробнее тут - https://github.com/rollup/plugins/tree/master/packages/commonjs#options

        https://v3.vitejs.ru/config/build-options.html#build-commonjsoptions
    */
    commonjsOptions: {},

    /*     
        Параметр настройки, если нужно собрать не приложение а библиотеку, например ui

        lib: false | LibraryOptions

        подробнее тут - https://vitejs.dev/guide/build.html#library-mode

        https://vitejs.dev/config/build-options.html#build-lib
    */
    lib: false,

    /*     
        Для создания манифест файла

        manifest: boolean | string (default: false)

        если true то будет создан файл .vite/manifest.json

        подробнее тут - https://vitejs.dev/guide/backend-integration.html

        https://vitejs.dev/config/build-options.html#build-manifest
    */
    manifest: false,

    /*     
        Для создания манифест файла для ssr

        ssrManifest: boolean | string (default: false)

        подробнее тут - https://vitejs.dev/guide/ssr.html

        https://vitejs.dev/config/build-options.html#build-ssrmanifest
    */
    ssrManifest: false,

    /*     
        При использовании ssr

        ssr: boolean | string (default: false)

        подробнее тут - https://vitejs.dev/guide/ssr.html

        https://vitejs.dev/config/build-options.html#build-ssr
    */
    ssr: false,

    /*     
        Собирает статику на клиенте. Конфликты с серверной статикой решаются разрабочиками

        ssrEmitAssets: boolean | string (default: false)

        https://vitejs.dev/config/build-options.html#build-ssremitassets
    */
    ssrEmitAssets: false,

    /*     
        Управление минификацией. "esbuild" и 'terser' использует одноименные минификаторы.

        Если стоит значение 'terser', нужно установить в дев зависимости https://www.npmjs.com/package/terser

        minify: boolean | 'terser' | 'esbuild' (default: 'esbuild' для сборки клиента, false для сборки SSR.)

        https://vitejs.dev/config/build-options.html#build-minify
    */
    minify: "esbuild",

    /*     
        Опции для terser минификатора. Использовать если minify: 'terser'.

        Подробнее тут https://terser.org/docs/api-reference/#minify-options

        https://vitejs.dev/config/build-options.html#build-terseroptions
    */
    terserOptions: {},

    /*     
        Разрешает или запрещает записывать данные на диск.

        write: boolean (default: true)

        Подробнее тут https://v3.vitejs.ru/guide/api-javascript.html#build

        https://v3.vitejs.ru/config/build-options.html#build-write
    */
    write: true,

    /*     
        Перед билдом удаляем dist

        emptyOutDir: boolean (default: true)

        https://v3.vitejs.ru/config/build-options.html#build-emptyoutdir
    */
    emptyOutDir: true,

    /*     
        По умолчанию Vite копирует файлы из publicDir в outDir

        copyPublicDir: boolean (default: true)

        https://v3.vitejs.ru/config/build-options.html#build-copypublicdir
    */
    copyPublicDir: true,

    /*     
        Включить/отключить отчеты о размерах, сжатых gzip

        Сжатие больших выходных файлов может быть медленным, поэтому его отключение может повысить производительность сборки для больших проектов.

        reportCompressedSize: boolean (default: true)

        https://v3.vitejs.ru/config/build-options.html#build-reportcompressedsize
    */
    reportCompressedSize: true,

    /*     
        Ограничение предупреждений о размере фрагмента (в КБ).

        chunkSizeWarningLimit: boolean (default: true)

        https://v3.vitejs.ru/config/build-options.html#build-chunksizewarninglimit
    */
    chunkSizeWarningLimit: 500,
  },

  //   ssr: {},

  //   resolve: {},

  //   optimizeDeps: {},

  //   legacy: {},

  //   json: {},

  //   html: {},

  //   experimental: {},

  //   esbuild: {},

  //   define: {},

  //   worker: {},

  //   customLogger

  //   css: {},

  plugins: [react()],
}));
