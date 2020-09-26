1. What problem does the context API help solve?
   ----it was created to prevent prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   ----actions is telling state how to update while as reducers is where initial state is stored
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   -------application state is best suited for prop drilling when multiple components are involved while as component state is when you want to keep state within one or 2 components, perhaps even 3
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   ----Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   ----REACT REDUX because you can call state within one store without having to call USESTATE in every component
