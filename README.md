# CustomTimestamp for Typescript

CustomTimestamp for Typescript is a library that validates your custom timestamp.

## Installation and usage
### Installation

```
npm i @ebabel-eu/custom-timestamp --save
```

or

```
yarn add @ebabel-eu/custom-timestamp
```

### Basic usage

```typescript
import { CustomTimestamp } from "custom-timestamp";

export class Example {
    public creation: CustomTimestamp = new CustomTimestamp(1325489568439);
    public updated: CustomTimestamp = new CustomTimestamp(Date.now());
}
```
