# Parcel
- Dev Build
- Local Server
- Hot Module Replacement
- File Watching Algorithms
- Image Optimization
- Bundling
- Compress


# JSX
- it is a js symbol
- It is not a javascript
- It is same as javasript
- By the help of JSX we can easily create react element 


# Babel
- it convert the JSX code in which the js engine is understood or browser understand
- it  is a javascript complier



# components
- Two types
  1. Class based components  - OLD way to create a component

  2. Functional components    - New way to create a component  
 => it is a javascript function to execute a a block of jsx code 


- Every thing inside the react is component 
example
- A card is a component, A header is a component ,A footer is a component, A group of card is also a component 

# component composition
- component inside a component is called component composition


######     Day ->5 
 Make separate file for separate components

# React Hooks
  
- Normal java script function given by react that    function give some superpower to us
   this is utility function
- useState()  -> Superpowerfull  state variables in react It maintains state variables
- State variables are maintained the component of a system
- useEffect() ->
if no dependencies array  then it will be called when our component renders.
if we have depencies array is empty useEffect will be called on initial render and just once called.
 if any element present in dependecies array then useEffect  will be called when the element present in the array is updated


-Whenever a state variable changes react re-render the component


######  react using reconciliation algorithms is also known as react fiber 
On the UI res-container has 15 restocard now my UI changes when I am  filter card
##### React Having Virtual DOM -> Virtual Dom is an representation of Actual DOM 


## Diff Algorithm -> tries to find difference between old and new  



 ### [LOADING-THE-PAGE]->[Rendering-the-page]->[API-calls]->[RE-Rendering]



###### Redux toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- connect our store to our app
- slice(cartSlice)
- Dispatch(action)
- Selector