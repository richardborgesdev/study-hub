// 7. Tree Breadth-First Search (BFS)
// To traverse a tree level by level.
// Time Complexity: O(N), where N is the total number of nodes in the tree.
// Space Complexity: O(W), where W is the maximum width of the tree, for the queue.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
function breadthFirstSearch(root) {
  if (!root) return [];

  const allLevels = [];
  const queue = [root]; // Queue for BFS, starting with the root

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevelNodes = [];

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift(); // Dequeue the first node
      currentLevelNodes.push(currentNode.value);

      // Enqueue child nodes for the next level
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    allLevels.push(currentLevelNodes);
  }

  return allLevels;
}

// --- Example ---
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log("BFS traversal: ", breadthFirstSearch(root));
// Output: BFS traversal:  [ [ 12 ], [ 7, 1 ], [ 9, 10, 5 ] ]
