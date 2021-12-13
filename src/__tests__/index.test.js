import React from 'react'
import Modal from '../component/index'
import renderer from 'react-test-renderer'


describe("When user click on a button and modal should be displaying", () => {
    it("should render a Modal", () => {
        const tree = renderer
            .create(<Modal viewModal="true" setViewModal= "true" dialogTitle="This is my fake title" dialogDescription="This is my fake description" returnTo="/" />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})

describe("When user click on a button but we don't want to display the modal", () => {
    it("should not render a Modal", () => {
        const tree = renderer
            .create(<Modal viewModal="false" setViewModal= "false" dialogTitle="This is my fake title" dialogDescription="This is my fake description" returnTo="/" />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})

describe("When modal is shown, and user click on close button", () => {
    it("should hide the modal", () => {
        const onClick = jest.fn();    
        const tree = renderer
            .create(<button aria-label="Close modal" onClick={onClick}>X</button>)
            .toJSON()
        
        tree.props.onClick(onClick)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})