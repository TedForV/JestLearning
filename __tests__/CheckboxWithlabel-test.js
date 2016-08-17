jest.unmock('../CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel',()=>{
	it('changes the text after click',()=>{
		//render a checkbox with label in the document
		const checkbox = TestUtils.renderIntoDocument(
			<CheckboxWithLabel labelOn="On" labelOff="Off" />
		);

		const checkboxNode = ReactDOM.findDOMNode(checkbox);

		//verify that it's Off by default
		expect(checkboxNode.textContent).toEqual('Off');

		//simulate a click and verify that it's now On
		TestUtils.Simulate.change(
			TestUtils.findRenderedDOMComponentWithTag(checkbox,'input')
		);
		expect(checkboxNode.textContent).toEqual('On');
	});
});