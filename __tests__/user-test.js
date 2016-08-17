jest.unmock('../user');
jest.unmock('bluebird');

import * as user from '../user';

describe('async tests',()=>{
	it('works with promise',()=>{
		return user.getUserName(5)
			.then(name=>expect(name).toEqual('Paul'));
	});
});