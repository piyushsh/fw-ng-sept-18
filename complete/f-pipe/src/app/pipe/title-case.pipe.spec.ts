import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {

	let titleCase;

	beforeEach(() => {
		titleCase = new TitleCasePipe();
	})

    it('test titleCase', () => {
		expect(titleCase.transform("oxford")).toEqual("Oxford")
	});

    it('already titleCase', () => {
		expect(titleCase.transform("London")).toEqual("London")
	});

});
