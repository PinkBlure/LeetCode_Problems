class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let current1 = list1, current2 = list2
    let newLinkedList: ListNode
    if (current1 !== null && current2 !== null) {
        while (current1.val !== 0) {
            
        }
        return null
    } else if (current1 === null) {
        return current2
    } else if (current2 === null) {
        return current1
    } else return null
}

const node1 = new ListNode(1), node2 = new ListNode(2), node3 = new ListNode(4)
node1.next = node2
node2.next = node3
const linkedList = node1

const node4 = new ListNode(1), node5 = new ListNode(3), node6 = new ListNode(4)
node4.next = node5
node5.next = node6
const linkedList2 = node4

console.log(mergeTwoLists(linkedList, linkedList2))