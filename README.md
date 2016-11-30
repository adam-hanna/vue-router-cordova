# vuejs, vue-router and cordova
This is a non-working example of vuejs, with vue-router and cordova. This style of app worked in vue v1 but is no longer working with vue v2.

The app will run with `cd vue && npm run dev` but will not run from the static files located at `cordova/www` after building with `cd vue && npm run build`

# Usage
```
$ cd vue
$ npm install
$ npm run dev
$ ctrl + c
$ npm run build
```

After building, open `cordova/www/index.html` with your favorite webbrowser and the router component will not be present.

# Note
1. This worked with vue and vue-router v1
2. This works without using vue-router
3. No errors get thrown, the portion of the app that is supposed to be shown with the router simply never shows. 