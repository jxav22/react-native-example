# Overview

This project is an example of a React Native application.

- Routes and layouts<br>
https://github.com/jxav22/react-native-example/tree/master/app

- A component built with react-native<br>
https://github.com/jxav22/react-native-example/blob/master/components/Sidebar.tsx

### Prerequisites
Get Node.js installed on your machine. You can download and install it from [here](https://nodejs.org/en/download/current)

(optional) Get Expo Go on your mobile device. Check out the installations [here](https://expo.dev/go)

### Installation
Clone the repo to your local machine:
```
git clone https://github.com/jxav22/react-native-example
```

Navigate inside the project directory:
```
cd react-native-example
```

Install dependencies:
```
npm install
```

To run the app, you can use the **Expo CLI**:
```
npx expo start
```

This command will start the Expo development server and open the Expo DevTools in your default web browser. 

From there, you can choose to run the app in an iOS or Android simulator, or scan the QR code with the Expo Go app on your mobile device to run the app on your device.

### Project Structure
The project structure is as follows:

```
app/: Directory containing the routing logic and assembled React pages
components/: Directory containing reusable React components
constants/: Directory containing definitions of constants (like Typescript types for example)
lib/: Directory containing any kind of utility file (basically anything that doesn't fit into the above)
````

### Potential Roadmap

The main differences between react-native and react development are:

- Native components instead of HTML
- Stylesheets instead of CSS

Everything else remains the same as react, if we treat it as a component library we can pretty much get started right away 

https://www.figma.com/file/LPlFe1ovPvjeDAzouclPTF/CAPSTONE-PROJECT-MOCK?type=design&node-id=0-1&mode=design&t=BkxTQhPTNqC4ZUnX-0

We should be able to implement everything here with the following components

https://reactnative.dev/docs/view<br>
https://reactnative.dev/docs/text<br>
https://reactnative.dev/docs/image<br>
https://reactnative.dev/docs/textinput<br>
https://reactnative.dev/docs/stylesheet<br>
https://reactnative.dev/docs/button<br>
https://reactnative.dev/docs/pressable<br>
https://reactnative.dev/docs/flatlist<br>
https://reactnative.dev/docs/modal<br>
(plus something for graphs?)

We can make platform specific stuff, e.g different styles for andriod and web, using the platform module<br>
https://reactnative.dev/docs/platform

It's also useful to know how to navigate between pages<br>
https://docs.expo.dev/router/navigating-pages/
