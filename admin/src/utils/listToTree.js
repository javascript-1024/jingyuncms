export function listToTree(list) {
  let map = {}, node, roots = [], i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i;
    list[i].children = [];
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId != null && node.parentId != 0) {
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}