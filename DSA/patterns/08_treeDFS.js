// 8. Tree Depth-First Search (DFS)
// To traverse a tree by going deep into one branch first.
// Time Complexity: O(N), where N is the total number of nodes.
// Space Complexity: O(H), where H is the height of the tree, for the recursion stack.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
function depthFirstSearch(root) {
  const visitedNodes = [];

  // Inner recursive function to perform the traversal
  function traverse(node) {
    if (!node) return;

    // Pre-order traversal: Visit node, then left, then right
    visitedNodes.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return visitedNodes;
}

// --- Example ---
const root2 = new TreeNode(12);
root2.left = new TreeNode(7);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(9);
root2.right.left = new TreeNode(10);
root2.right.right = new TreeNode(5);

console.log("DFS traversal: ", depthFirstSearch(root2));
// Output: DFS traversal:  [ 12, 7, 9, 1, 10, 5 ]
