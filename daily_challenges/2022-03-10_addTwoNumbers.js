/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Solution - not bad!
//  Runtime: 126 ms, faster than 75.80% of JavaScript online submissions for Add Two Numbers.
//  Memory Usage: 48 MB, less than 14.84% of JavaScript online submissions for Add Two Numbers.

var addTwoNumbers = function(l1, l2) {
    // traverse initial lists to get integers
    function traverseAndPush(llist){
        let newArr = [];
        while (llist){
            newArr.unshift(llist.val)
            llist = llist.next
        }
        return newArr
    }
    
    let l1Arr = traverseAndPush(l1).join("") // collapse arrays into strings representing ints
    let l2Arr = traverseAndPush(l2).join("")
    let finalInt = BigInt(l1Arr) + BigInt(l2Arr); // add ints
    finalInt = String(finalInt);
    // create new list, populate the list from the string in reverse
    let finalList = new ListNode(0, null)
    let current = finalList
    for (let i = finalInt.length; i > 0; i--){
        let tempNode = new ListNode(finalInt[i-1], null)
        current.next = tempNode
        current = current.next
    }

    return finalList.next
    
};

