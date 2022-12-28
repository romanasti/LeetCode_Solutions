var middleNode = function (head) {

    let fast = head, slow = head
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow

};

console.log(middleNode([1, 2, 3, 4, 5]))


// another solution (array)
// function middleNode(head) {
//     let res = 0;
//     for (let i = 0; i < head.length / 2; i++) {
//         res = head[i]
//         if (head.length % 2 === 0) {
//             res = head[i] + 1
//         }
//     }
//     return res
// }




