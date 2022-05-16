export default class Task {
    heading: string;
    details: string;
    date: string;

    constructor(data: any) {
        this.heading = data.heading;
        this.details = data.details;
        this.date = data.date;
    }
}