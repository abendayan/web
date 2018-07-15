const server = require('../server.js');
const chai = require('chai');
chai.use(require('chai-http'));
const assert = chai.assert;

process.on('unhandledRejection', e => {
  console.error(e);
});

describe('API test / calculate', function() {	
	var state = null;

	it('initialization of state of calculator', function(done) {
		chai.request(server)
			.post('/calculate')
			.send({input: '4'})
			.end(function(err, res) {
				state = res.body;
				assert.equal(state.display, '4');
				done();
			})
	});
	
	it('"+" should not change the display', function(done) {
		chai.request(server)
			.post('/calculate')
			.send({input: '+'})
			.end(function(err, res) {
				state = res.body;
				assert.equal(state.display, '4');
				done();
			})
	});
	
	it('4+2 , display is 2', function(done) {
		chai.request(server)
			.post('/calculate')
			.send({input: '2'})
			.end(function(err, res) {
				state = res.body;
				assert.equal(state.display, '2');
				done();
			})
	});
	
	it('equals to 6', function(done) {
		chai.request(server)
			.post('/calculate')
			.send({input: '='})
			.end(function(err, res) {
				state = res.body;
				assert.equal(state.display, '6');
				done();
			})
	});
	
	it('3*4*3=36', async function() {
		let res = await chai.request(server)
			.post('/calculate')
			.send({input: '3'})
		
		state = res.body;
		assert.equal(state.display, '3');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({input: '*'})
		state = res.body;
		assert.equal(state.display, '3');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({input: '4'})
		state = res.body;
		assert.equal(state.display, '4');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({input: '*'})
		state = res.body;
		assert.equal(state.display, '12');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({input: '3'})
		state = res.body;
		assert.equal(state.display, '3');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({input: '='})
		state = res.body;
		assert.equal(state.display, '36');
	});
	
	
	it('30-10/2=10', async function() {
		let res = await chai.request(server)
			.post('/calculate')
			.send({calculatorState: state, input: '3'})
		
		state = res.body;
		assert.equal(state.display, '3');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({calculatorState: state, input: '0'})
		state = res.body;
		assert.equal(state.display, '30');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({calculatorState: state, input: '-'})
		state = res.body;
		assert.equal(state.display, '30');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({calculatorState: state, input: '1'})
		state = res.body;
		assert.equal(state.display, '1');

		res = await chai.request(server)
		.post('/calculate')
		.send({calculatorState: state, input: '0'})
		state = res.body;
		assert.equal(state.display, '10');

		res = await chai.request(server)
			.post('/calculate')
			.send({calculatorState: state, input: '/'})
		state = res.body;
		assert.equal(state.display, '20');
		
		res = await chai.request(server)
			.post('/calculate')
			.send({calculatorState: state, input: '2'})
		state = res.body;
		assert.equal(state.display, '2');

		res = await chai.request(server)
			.post('/calculate')
			.send({calculatorState: state, input: '='})
		state = res.body;
		assert.equal(state.display, '10');
	});

	after(function() {
		server.close();
	});
});