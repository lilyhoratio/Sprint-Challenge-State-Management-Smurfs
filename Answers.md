1.  What problem does the context API help solve?

- Context API simplifies state management by storing props in an object that is accessible to all levels of the tree without a need for "prop-drilling"

1. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Store is an object which holds the state. That state is passed to our UI components.

- Actions are simply objects that are created from user interactions (events firing). They are returned from action creators, which are invoked from events and are then dispatched to reducers. Action objects typically include `type` (variable set to string to avoid bugs from mispellings) and payload (data about the )

when event occurs, action creator is invoked, action describing event id dispatch

- Reducers are pure functions that manage application state. They accept the previous state, and then creates a copy and returns the new state within the store. This new state is created based on the action type that is dispatched (typically within a switch statement) and the payload.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is the state across the entire application that can be passed down to components, whereas component state is state stored in that individual component. If there are multiple states used in multiple components, it is best to manage state in the application (using context API or Redux) if our app is large enough with many component layers.

1. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

   Redux thunk is a middleware which allows for the ability to handle asynchronous operations within our app by intercepting the flow of data from the action to the reducer. If a function is returned instead of an action, thunk will invoke the function and pass in dispatch as an argument. Using asynchronous functions in this way will allow us to handle async in redux.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Love thunking.
