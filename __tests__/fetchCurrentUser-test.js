'use strict';

jest.unmock('../fetchCurrentUser');

describe('fetchCurrentUser',()=>{
	it('calls into $.ajax with the corrent params',()=>{
		const $ = require('jquery');
		const fetchCurrentUser = require('../fetchCurrentUser');

		//call into the function we want to test
		const dummyCallback = ()=>{};
		fetchCurrentUser(dummyCallback);

		expect($.ajax).toBeCalledWith({
			type:'GET',
			url:'http://example.com/currentUser',
			success:jasmine.any(Function)
		});
	});

	it('calls the callback when $.ajax requests are finished',()=>{
		const $ = require('jquery');
		const fetchCurrentUser = require('../fetchCurrentUser');

		//create a mock function for our callback
		const callback = jest.fn();
		fetchCurrentUser(callback);

		//now we emulate the process by when '$.ajax' would execute its
		//own callback
		$.ajax.mock.calls[0/*first call*/][0/*first argument*/].success({
			firstName:'Bobby',
			lastName:'");DROP TABLE Users;--'
		});

		// any finally we assert that this emulated call by '$.ajax' incurred a
		// call back into the mock function we provided as a callback
		expect(callback.mock.calls[0/*first call*/][0/*first arg*/]).toEqual({
			loggedIn:true,
			fullName:'Bobby ");DROP TABLE Users;--'
		});
	});
});