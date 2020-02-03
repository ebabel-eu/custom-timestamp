import { expect } from "chai";
import "mocha";
import { CustomTimestamp } from "../lib/custom-timestamp";

describe("CustomTimestamp test", () => {
    
    it("Should validate a string as incorrect", () => {
        const wrong = "wrongcustomTimestamp";
        expect(CustomTimestamp.isCustomTimestamp(wrong)).equal(false);
    });

    it("Should validate a number that is too small as incorrect", () => {
        const tooSmall = 45;
        expect(CustomTimestamp.isCustomTimestamp(tooSmall)).equal(false);
    });

    it("Should validate a number that is too big as incorrect", () => {
        const tooBig = 99999999999991;
        expect(CustomTimestamp.isCustomTimestamp(tooBig)).equal(false);
    });

    it("Should validate a correct Custom Timestamp", () => {
        const right: CustomTimestamp = new CustomTimestamp('1234567891011');
        expect(CustomTimestamp.isCustomTimestamp(right)).equal(true);
    });

    it("Should accept to use CustomTimestamp as a type", () => {
        const typical: CustomTimestamp = new CustomTimestamp(1234567891012);
        expect(typical instanceof CustomTimestamp).equal(true);
    });
});
