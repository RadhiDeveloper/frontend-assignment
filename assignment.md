## REACT Assignment

#### NOTE: need to install https://styled-components.com/docs/basics#installation and https://ant.design/docs/react/introduce#Installation using YARN or NPM. Don't forget to commit the package.json and package-lock.json files

1. Create a component (Class component) named `AntDesignCounter` where you will use this UI library https://ant.design/components/overview/
2. In here you are going to create a second version of the counter but using these 2 components from that antdesign library: `Card: https://ant.design/components/card/` and `Button: https://ant.design/components/button/`. Also going to use `style-components: https://styled-components.com/`
3. Display the counter value wrapped in a `style-components` (add some formatting: border, font-size, color, background-color) and a `Button` component to reset the counter value to 0 using a new reducer in file components/counter/counterSlice.js. Do this using `Card` component (this implementation https://codesandbox.io/s/ogomu)
4. Pass one property (isOdd as boolean) to the `StyledCounter` and when that prop is true (counter value is an odd number), set CSS color as green (styled-components adapting technique)
5. Need to use React constructor and lifecycles: constructor, componentDidMount (to set the timer), componentWillUnmount (to remove the timer). 
6. Add a single state value (Array) named `counterHistory` and push the counter value to that array (from the store). Consider using `key` prop for every item in the list (to avoid Warning: Each child in a list should have a unique "key" prop). Do this using `setInterval` every 2 seconds. Display this array in a simple list (using ul and li). Slice the array to display only the last 10 values.

### NOTE: Add every task as a different commit: Assignment 1, Assignment 2, etc
### Make sure you use `destructuring` for props and state and use correctly the implementation for `connect` 


```Please resend this as a compressed file or push this to your own repo and send us the link```

### Running example

https://share.vidyard.com/watch/s46sdxfj7B3hC4tYBSqgdj?