function miniMaxSum(arr) {
    let sortArray = arr.sort((a, b) => a - b);
    let total = 0;
    let min;
    let max;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    min = total - sortArray[0];
    max = total - sortArray[sortArray.length - 1]
}
