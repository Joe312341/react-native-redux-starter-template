# react-native-redux-starter-template
React Native template using Redux and React Navigation (includes lint configuration)

# How to Use
1. clone the project
2. go to the cloned project directory and type `npm install`

# Redux
Uses redux for state managment.
A comprehensive guide on redux can be found here http://redux.js.org/

# React Navigation
React Navigation is used for routing, the template uses a Stacknavigator as an example. Additionally navigation is integrated with redux 
(check out the navigation reducer).

More info on React Navigation can be found here https://reactnavigation.org/

# Linting
The following liniting packages are used. You can adapt the rules in the `.eslintrc.json` file
```
    "babel-eslint": "^6.1.2",
    "babel-jest": "20.0.1",
    "babel-preset-react-native": "1.9.2",
    "eslint": "^3.19.0",
    "eslint-config-airbnb": "^15.0.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^5.0.1",
    "eslint-plugin-react": "^7.0.1",
```

# Structure
The template is structured as follows. The entry points are in `index.ios.js` and `index.android.js` respectively.

The `Appcontainer` component is used to configure and mount the store while the `App` component mounts the navigation.

The template uses higher order components stored in the `containers` subdirectory, these are the only components outside of `App` that connect to the redux store using `mapStateToProps`. These are also the only component which receive data (for example from an API or a database). Lower level components which are primarily used to display data do not access the store directly and all necessary actions are passed down by the container components using `bindActionCreators`. 

Learn more about Higher Order components here:
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
https://facebook.github.io/react/docs/higher-order-components.html

# Feedback
For any feedback message me directly or create an issue :)
