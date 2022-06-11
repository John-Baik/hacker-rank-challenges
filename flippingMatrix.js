function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let total = 0;
    let i = 0;
    let j = 0;
    while (i < n && j < n) {
        let current = matrix[i][j];
        let topRight = matrix[i][matrix.length - j - 1];
        let bottomRight = matrix[matrix.length - i - 1][matrix.length - j - 1];
        let bottomLeft = matrix[matrix.length - i - 1][j];
        total += Math.max(current, topRight, bottomRight, bottomLeft);
        j++;
        if (j === n && i !== n) {
            i++;
            j = 0;
        }
    }
     return total;
}
