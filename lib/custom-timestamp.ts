export class CustomTimestamp {
    public static MINIMUM = 1000000000000;
    public static MAXIMUM = 9999999999999;

    public static isCustomTimestamp(customTimestamp: any) {
        const value: number = Number(customTimestamp);
        return !isNaN(value) && value && value >= this.MINIMUM && value <= this.MAXIMUM;
    }

    public static parse(customTimestamp: any): CustomTimestamp {
        return new CustomTimestamp(customTimestamp);
    }

    private value: number;

    public constructor(customTimestamp: any) {
        if (!customTimestamp) { throw new TypeError("Invalid argument; `value` has no value."); }

        this.value = CustomTimestamp.MINIMUM;

        if (customTimestamp && CustomTimestamp.isCustomTimestamp(customTimestamp)) {
            this.value = customTimestamp;
        }
    }

    public toString(): string {
        return this.value.toString();
    }

    public toJSON(): any {
        return {
            value: this.value,
        };
    }
}


