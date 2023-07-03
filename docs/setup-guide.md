#### Step 1. Open Following link

https://quasar.dev/start/quick-start

#### Step 2. Navigate to directory

Navigate to directory where you want to create project.

#### Step 3. Enter following command.

```bash
npm init quasar
```

#### Step 4. Select This option

```
App with Quasar CLI, let's go!`
```

#### Step 5. Enter Project Folder to be created.

In this example/tutorial, it's `the-hive-mobile-app`

```
Project folder: › the-hive-mobile-app
```

#### Step 6. Pick Quasar Version.

Pick Quasar V2 or whichever is latest.

```
Pick Quasar version: ›
❯   Quasar v2 (Vue 3 | latest and greatest)
```

#### Step 7. Pick Script Type.

Pick Typescript.

```
? Pick script type: › - Use arrow-keys. Return to submit.
❯   Typescript
```

#### Step 8. Pick Quasar App CLI Varient.

Pick `Quasar App CLI with Vite`

```
? Pick Quasar App CLI variant: ›
❯   Quasar App CLI with Vite
```

#### Step 9. Provide Package Name.

In this example/tutorial, it's as follows

```
Package name: › the-hive-mobile-app
```

#### Step 10. Provide Product Name

In this example/tutorial, it's as follows

```
Project product name: (must start with letter if building mobile apps) › The Hive Mobile App
```

#### Step 11. Provide description.

```
Project description: › The Hive Mobile Application with Quasar
```

#### Step 12. Set Author.

```
Author: › Sagar <sagar.devices@gmail.com>
```

#### Step 13. Pick a Vuew Component Style.

Select `Composition API`

```
? Pick a Vue component style: ›
❯   Composition API
```

#### Step 14. Pick CSS Preprocessor

Select `Sass with SCSS`

```
? Pick your CSS preprocessor: ›
❯   Sass with SCSS syntax
```

#### Step 15. Select Features

Select Features as indicated below

```
Check the features needed for your project: ›
◉   ESLint
◉   State Management (Pinia)
◯   State Management (Vuex) [DEPRECATED by Vue Team]
◉   Axios
◉   Vue-i18n
```

#### Step 16. Pick an ESLint preset

```
Pick an ESLint preset: ›
❯   Prettier
```

#### Step 17. Install project dependencies with NPM

```
 Install project dependencies? (recommended) ›
❯   Yes, use npm
```

#### Step 18. Navigate to project directory.

```
cd the-hive-mobile-app
```

#### Step 19. Start the Dev Server

```
quasar dev
```

#### Step 20. To Start Dev with Mobile app

Enter `CTRL+C` to stop previously started server & now start with followings.

You can use cordova too. But I recommend capacitor.

```
quasar dev -m capacitor -T ios
```

#### Step 21. Provide App ID.

```
What is the Capacitor app id? app.thehive.theHiveApp
```

#### Step 22. Select IP Address

```
What external IP should Quasar use? (Use arrow keys)
❯ 192.168.1.9
  192.168.1.2
```

#### Step 23. Select Device / Simulator

Now, it will start Xcode. Select a device / simulator & Hit run button.

#### Step 24. Open VS Code

Switch Back to Terminal, Open New tab in terminal.
And open VS Code

```
➜  the-hive-mobile-app > code .
```

#### Step 25. Start Developing.

Open `src` Folder from Left - project explorer.

And start developing some cool stuff.

![VSCode with iOS Simulator](https://github.com/sag333ar/the-hive-mobile-app/blob/master/docs/assets/start-building.png?raw=true)
