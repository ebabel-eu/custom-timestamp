# CustomTimestamp for Typescript

CustomTimestamp for Typescript is a library that validates your custom timestamp.

## Installation and usage
### Installation

```
npm i custom-timestamp --save
```

### Basic usage

```typescript
import { CustomTimestamp } from "custom-timestamp";

export class Example {
    public creation: CustomTimestamp = 1325489568439;
    public updated: CustomTimestamp = Date.now();
}
```
