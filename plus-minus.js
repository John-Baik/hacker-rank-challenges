/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let length = arr.length;
    for (let value of arr) {
        if (value > 0) {
            positive++;
        } else if (value < 0) {
            negative++;
        } else if (value === 0) {
            zero++;
        }
    }
    let positiveAvg = (positive / length).toFixed(6);
    let negativeAvg = (negative / length).toFixed(6);
    let zeroAvg = (zero / length).toFixed(6);
    console.log(positiveAvg)
    console.log(negativeAvg)
    console.log(zeroAvg);
}
