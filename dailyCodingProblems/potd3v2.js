class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  }
  
  const node = new TreeNode(
    '1',
    new TreeNode('2', new TreeNode('3', new TreeNode('4'), new TreeNode('5')), new TreeNode('6'))
  );
/*
Serialize (node)
1. initiate an empty string 
2. if input node is null, return string 
3. initilize an empty array QUEUE
4. set the value of ROOT to input node
5. push the ROOT into the QUEUE
6. WHILE (queue.length !==0 )
7. const NODE = queue.shift()
8. if NODE == null, serializedString += '*'
9. else serilializedString += `${node.val}` 
10. queue.push(node.left)
11. queue.push(node.right);
12. return serializedString
*/

const serialize = (node) => {
  let serializedString = '';
  if (!node) return serializedString;

  const queue = [];
  let root = node; 
  queue.push(root);

  while(queue.length){
    let node = queue.shift();

    if (!node) serializedString += '*'
    else {
    serializedString += `${node.val}`;
    queue.push(node.left)
    queue.push(node.right)
    }
  }
  return serializedString;
}



  const serializedBST = serialize(node);
  console.log(`Line 53: `, serializedBST); // '1 2 * 3 6 4 5 * * * * * *'

/*
Deserialize (string)
// check string for NULL value, if so return NULL
// create anew VALUES array with string.split(' ');
// pop off the last value with VALUES.pop();

// create a ROOT variable set to new NODE(values[0])
// initiate a QUEUE array 
// push ROOT into QUEUE

// iterate over VALUES array start at 1 
// parentNode = queue.shift()
// if values[i] !== 'null'
// leftChild = new Node (values[i])
// parentNode.left = leftChild
// queue.push(leftChild)

// i++
// if values[i] !== 'null'
//right child = new Node (values[i])
// parentNode.right= right child
// queue.push(right child)

return root
*/

const deserialize = string => {
  if (string.length === 0) return null;
  const values = string.split('');
  console.log(`Line 84: `,string)
  console.log(`Line 85: `,values)
  // values.pop();
  // console.log(`Values.pop(): `, values)

  const root = new TreeNode(values[0])
  console.log(root)
  const queue = [];
  queue.push(root); 

  for (let i = 1; i < values.length; i++){
    const parentNode = queue.shift();

    if (values[i] !== '*'){
      const leftChild = new TreeNode(values[i]);
      parentNode.left = leftChild;
      queue.push(leftChild);
    }
    
    i++;

    if (values[i]!== '*'){
      const rightChild = new TreeNode(values[i]);
      parentNode.right = rightChild;
      queue.push(rightChild)
    }
  }
  return root;
}

console.log(deserialize(serializedBST)) // heavily nested object