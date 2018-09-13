import { DoublePipe } from './double.pipe';

describe('DoublePipe', () => {

    let pipe:DoublePipe;

    beforeEach(() => {
        pipe = new DoublePipe();
    })

	it('doubles numbers', () => {
		expect(pipe.transform(2)).toEqual(4);
	});

    it('does not change strings', () => {
		expect(pipe.transform("A")).toEqual("A");
	});

});
