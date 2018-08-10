export class CountService {
    totalCount = 0;
    incrementCount() {
        this.totalCount++;
        console.log(this.totalCount);
    }
}
