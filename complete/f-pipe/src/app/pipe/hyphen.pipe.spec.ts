import { HyphenPipe } from './hyphen.pipe';

describe('HyphenPipe', () => {

	let hyphen;

	beforeEach(() => {
		hyphen = new HyphenPipe();
	})

    it('test loud pipe with a number ', () => {
		expect(hyphen.transform(1024)).toEqual(1024)
	});

	it('test loud pipe with a string ', () => {
		expect(hyphen.transform("hello world")).toEqual("hello-world")
	});

});
