function diagonalDifference(arr) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        firstDiagonalSum += arr[i][i];
        secondDiagonalSum += arr[i][j];
    }
    return Math.abs(secondDiagonalSum - firstDiagonalSum);
}
