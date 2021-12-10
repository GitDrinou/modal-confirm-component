# What is this ?

Get a confirm modal when user click on a button.

## Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Dependencies installation

Execute this command to install all dependencies of this project
### `npm install `

## Lauching the project

### 1. Open the project on your IDE (here we use VSCode)

- Fork the repository
- Clone it on your computer
- install dependencies if necessary

### 2. Run the React App project
- Open a new terminal ( project folder )
- Execute the following npm command : `npm start `

After doing these steps, normally the React app is launched on your default browser at this address : [http://localhost:3000](http://localhost:3000)

## How to use it on your own project

### 1. Create a button to launch the modal
`
const [viewModal, setViewModal] = useState(false)

const handleClickButton = () => { 
    setViewModal(true)      
}

<button onClick={handleClickButton}>Click Me !</button>
`

### 2. Place the Modal component on the same file of the previous button created
`
import modal-confirm-component from 'modal-confirm-component'

<Modal 
    viewModal={viewModal}                       
    dialogTitle = "Employee Created"
    dialogDescription = "A new employee is successfully created"
    returnTo = "/"
/>
`

## Options

this component support 4 options, which are both props :

* *viewModal* - it is a local boolean state (by default : false)
* *dialogTitle* - this is the title of the confirmation (for Example: "Employee Created")
* *dialogDescription* - this is the description/text of confirmation (for example : "A new employee is successfully created")
* *returnTo* - this is the window.location.pathname when user click on X button on the modal dialog

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
