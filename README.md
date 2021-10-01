# Getting stated with react-simple-toastify

**react-simple-toastify** is a simple library for displaying notifications in your application

## Installation
For installing this library you should use **npm**.

```bash
npm install react-simple-toastify

```

or

```bash
npm i react-simple-toastify

```

## Usage
It's very simple to setup this library, you have to follow the following steps below.

### Step 1.
You have to import and set up one Provider of context in your application, where you want to display **toasts**.
Assuming that you have an App component which is your main component that contains all the rest of yours other components. You must put all other elements or components inside the Provider's context, which contains global declaration of data that will be access anywhere in the app. We will also use a hook that will provide state and two function for displaying and masking toasts.

**Import**
```javascript
import {ToastContext, useToastState} from 'react-simple-toastify'

```

**Creation of App component and setup the Provider**

```javascript

const App = () => {
  const [
    toastState, // this contain data of current toast
    displayToast, // this function allow you to display toast
    maskToast // this function is use to mask toast
  ] = useToastState()

  const contextValue = {...toastState, displayToast, maskToast}

  return (
    <ToastContext.Provider value={contextValue}>
      {
        // here you can put anything you want...
      }
    <ToastContext.Provider>
  )
}

export default App

```

### Step 2.
Now, you need to import **ToastContainer** component, which is used to display toast on the screen.

**Import**

```javascript
import {ToastContext, useToastState, ToastContainer} from 'react-simple-toastify'

```

**Set up**
After having import **ToastContainer**, you need to include it inside the rendering of the App component and provide to it some Options or Configuration.

```javascript

const toastOptions = {
  position: "top" || "center" || "bottom",
  timeout: 1000
}

```

**Explanation of the Option**
| properties | type     | default   | description                                  |
| ---        | ---      | ---       | ---                                          |
| position   | String   | "bottom"  | set the position of the toast on the screen  |
| timeout    | Number   | 1000      | set the delay time before masking the toast  |

**Insertion of the ToastContainer Component**

```javascript

const App = () => {
  const [
    toastState, // this contain data of current toast
    displayToast, // this function allow you to display toast
    maskToast // this function is use to mask toast
  ] = useToastState()

  // the global state
  const contextValue = {...toastState, displayToast, maskToast}

  // some options
  const toastOptions = {
    position: "bottom",
    timeout: 1000
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {
        // here you can put anything you want...
      }

      <ToastContainer options={toastOptions} />
    <ToastContext.Provider>
  )
}

export default App

```

It's ok, you have correctly setup the toast system in your application, Congrats ... Now, you can display toast everywhere in your application

### Step 3.

Now, you are ready to display toast. Suppose that you have another component named **TestComponent**. Let's see how we can easily display toast.

#### With Function component

```javascript
import React, {useContext} from 'react'
import {ToastContext} from 'react-simple-toastify'

const TestComponent = () => {
  /**
   * Here we destructure the displayToast from ToastContext
   * */
  const {displayToast} = useContext(ToastContext)

  return (
    <div>
      {
        // other elements here
      }

      <button onClick={() => displayToast("Hello World !")}>display Toast</button>
    </div>
  )
}

export default TestComponent

```

#### With Class Component

```javascript
import React from 'react'
import {ToastContext} from 'react-simple-toastify'

class TestComponent extends React.Component {
  render() {
    const {displayToast} = this.context

    return (
      <div>
        {
          // other elements here
        }

        <button onClick={() => displayToast("Hello World !")}>display Toast</button>
      </div>
    )
  }
}

TestComponent.contextType = ToastContext

export default TestComponent

```

**Explanation**

When you call the displayToast() function, by passing the message as argument, the toast will be displayed and will disappear after the number of milliseconds define in the configuration of the **ToastContainer**.
This function takes only one argument, which is the message to display.
