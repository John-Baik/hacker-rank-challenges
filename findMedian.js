function findMedian(arr) {
    let answer;
    const sortedArray = arr.sort((a, b) => a - b);
    for (let i = 0, j = sortedArray.length - 1; i !== j; i++, j--) {
        answer = j -1;
    }
    return sortedArray[answer];

}
