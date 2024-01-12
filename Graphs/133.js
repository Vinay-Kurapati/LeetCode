class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};

const cloneGraph = (node) => {
    let visited = {}

    const dfs = (node) => {
        if (!node) return node
        if (visited[node.val]) return visited[node.val]

        let root = new Node(node)
        visited[node.val] = root

        for (let neighbor of node.neighbors) {
            root.neighbors.push(dfs(neighbor))
        }
        return root
    }
    return dfs(node)
}

cloneGraph([[2,4], [1,3], [2,4], [1,3]])