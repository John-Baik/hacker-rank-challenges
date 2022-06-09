function countingSort(arr) {
    let counterArray = Array(100).fill(0);
    for (let number of arr) {
        counterArray[number]++;
    }
    return counterArray;
}
