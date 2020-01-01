# Pattern: Shared Independent Component State

> A pattern for shared state from a pluggable shared component

## Description

This pattern allows the state of an independent/plug-in component to be available within specific parts of a larger application with as minimal changes to that larger application as possible.


## Usage

After cloning this repository ...

```sh
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080) in your browser.


## Scenario

You're using a theme or some larger application implementation that you didn't write, such as a Gatsby starter. You need to extend it with functionality but want to minimize the changes to the code you didn't write as much as possible. You implement your new functionality as a React component and it stores its state in a context. You use that context inside the parts of the larger application that are intended to be extension points.


## Implementation overview

This example uses the React [Context API](https://reactjs.org/docs/context.html) to store the shared state. The `Provider` is wrapped and component state is managed in the wrapper so rendering is triggered appropriately. The shared/independent component updates the state within its event handlers. Whenever the state needs to be used, the consuming component uses the `Consumer` of the context.


## Implementation specifics

In this example:

- The `NumberSelection.jsx` file is the provider and wrapper part of this pattern. It exports the context so the `Consumer` is available and also exports a wrapper we call the provider (`NumberSelectionProvider`). This wrapper component is stateful and maintains the shared state. Internally it uses a Context `Provider`.

- The `Selector` component is the shared/independent/plug-in component that alters shared state. It gets the event handler directly from the context's value.

- The `Display` component is the natural extension point, the code we're responsible for writing, that uses the shared state. It uses the Context's `Consumer` directly or using the `useContext()` function to access the shared state value.

- The `App` component represents the larger application we didn't write. The only change necessary in `App.jsx` is to wrap everything with the provider (`NumberSelectionProvider`). The `Selector` and `Display` components do **not** need to be _direct_ descendants of the wrapper so long as they are descendants at some level.


## Synopsis

This patterns isn't much different that how we would use the React Context API to share state if we were writing the entire application. The main thing this pattern does is use a wrapper (`NumberSelectionProvider`) to hold the shared state instead of requiring the `App` component to do it. This minimises the changes by only needing to add the wrapper.
