import { CustomTimestamp } from "@ebabel-eu/custom-timestamp";
 
export class Example {
    public creation: CustomTimestamp = new CustomTimestamp(1325489568439);
    public updated: CustomTimestamp = new CustomTimestamp(Date.now());
}
