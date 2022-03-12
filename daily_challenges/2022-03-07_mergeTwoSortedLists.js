// 21. Merge Two Sorted Lists

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Not an especially creative solution but good performance -- strictly iterative.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }


var mergeTwoLists = function (list1, list2) {
    let finalList = new ListNode(0, null);
    let current = finalList;

    while (list1 || list2) {
        if (list1 === null) {
            current.next = list2;
            current = current.next;
            list2 = list2.next
        } else if (list2 === null) {
            current.next = list1;
            current = current.next;
            list1 = list1.next;
        }
        else if (list1.val <= list2.val) {
            current.next = list1;
            current = current.next;
            list1 = list1.next
        } else {
            current.next = list2;
            current = current.next;
            list2 = list2.next
        }
    }

    return finalList.next
};

console.log(mergeTwoLists(list1 = [1,2,4], list2 = [1,3,4]))