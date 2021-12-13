# What is this ?

Get a simple modal when user click on a button.

## Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Installation

Execute this command to install all dependencies of this project
### `npm install `

## How to use it on your own project

### 1. Create a button to launch the modal

```
const [viewModal, setViewModal] = useState(false)

const handleClickButton = () => { 
    setViewModal(prev => !prev)      
}

<button onClick={handleClickButton}>Click Me !</button>
```

### 2. Place the Modal component on the same file of the previous button created

```
import Modal from 'modal-styled-react'

<Modal 
    viewModal={viewModal}
    setViewModal={setViewModal}                       
    dialogTitle = "Employee Created"
    dialogDescription = "A new employee is successfully created"
    returnTo = "/"
/>
```

## Options

this component support 5 options, which are both props :

* *viewModal* - it is a local boolean state (by default : false)
* *setViewModal* - it is the change state function use on the modal component for close button
* *dialogTitle* - this is the title of the confirmation (for Example: "Employee Created")
* *dialogDescription* - this is the description/text of confirmation (for example : "A new employee is successfully created")
* *returnTo* - this is the window.location.pathname when user click on X button on the modal dialog
