
var isPalindrome = function (head) {
    let array = [];
    while (head) {
        array.push(head.val);
        head = head.next;
    }

    let side = 0;
    let reverseSide = array.length - 1;
    while (side <= reverseSide) {
        if (array[side] !== array[reverseSide]) {
            return false;
        }
        side++, reverseSide--;
    }

    return true;
};
console.log(isPalindrome([1, 2]))
