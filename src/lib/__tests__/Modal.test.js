import React from "react"
import Modal from "../Modal"
import renderer from "react-test-renderer"

describe("When user click on a button and modal should be displaying", () => {
  it("should render a Modal", () => {
    const tree = renderer
      .create(<Modal viewModal="true" dialogTitle="This is my fake title" dialogDescription="This is my fake description" returnTo="/" />)
      .toJSON()
    expect(tree).toMatchSnapshot()    
  })
})

describe("When user click on a button and modal shouldn't be displaying", () => {
    it("should not render a Modal", () => {
        const tree = renderer
            .create(<Modal viewModal="false" dialogTitle="This is my fake title" dialogDescription="This is my fake description" returnTo="/" />)
            .toJSON()
          expect(tree).toMatchSnapshot()
    })
})

describe("When modal is shown, and user click on X button", () => {
    it("should hide the modal", () => {
        const onClick = jest.fn();    
        const tree = renderer
            .create(<button type="button" aria-label="Close" title="Close window" className="btnClose" onClick={onClick}>X</button>)
            .root

        const buttonInstance = tree.findByProps({
            type: 'button',
        })
        
        buttonInstance.props.onClick(onClick)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})