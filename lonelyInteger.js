function lonelyinteger(a) {
    let sortedArray = a.sort((a, b) => a - b);
    for (let i = 0; i < sortedArray.length; i++) {
        let previous = sortedArray[i - 1];
        let next = sortedArray[i + 1];
        if (sortedArray[i] !== previous && sortedArray[i] !== next) {
            return sortedArray[i];
        }
    }
}
