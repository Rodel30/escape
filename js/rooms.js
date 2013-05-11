var rooms = [
	{ 'boxes': [[2,2]],
		'walls': [[1,1],[1,3],[2,1]],
		'exit': [3,2],
		'dim': [3,3],
		'spawn': [1,2]
	},
	{ 'boxes': [[1,1],[3,1],[3,2],[4,2],[4,4]],
		'walls': [[1,4],[2,1],[3,3]],
		'exit': [4,3],
		'dim': [4,4],
		'spawn': [1,2]
	},
	{ 'boxes': [[1,1],[1,3],[1,4],[2,2],[3,1],[3,3],[4,1],[4,2]],
		'walls': [[2,4],[3,4],[4,4]],
		'dim': [4,4],
		'exit': [4,3],
		'spawn': [1,2]
	},
	{ 'boxes': [[1,1],[2,3],[3,2],[3,3],[3,4]],
		'walls': [[1,3],[1,4],[2,1],[3,1],[4,4]],
		'dim': [4,4],
		'exit': [4,3],
		'spawn': [1,2]
	},
	{ 'boxes': [[4,3],[2,1],[1,1],[5,3],[3,2],[3,3],[2,3],[4,4],[1,2],[1,5],[4,5],[4,1],[4,2],[3,4]],
		'walls': [[5,1],[2,2],[3,5],[5,2]],
		'dim': [5,5],
		'exit': [5,5],
		'spawn': [1,3]
	},
	{ 'boxes': [[1,5],[3,5],[5,4],[4,3],[2,3],[4,2],[1,1],[2,4],[2,2],[3,2],[4,5],[2,5]],
		'walls': [[5,1],[5,2],[4,4],[1,3],[2,1],[4,1]],
		'dim': [5,5],
		'exit': [5,5],
		'spawn': [3,1]
	},
	{ 'boxes': [[1,1],[1,2],[2,2],[2,3],[2,5],[3,2],[3,5],[4,5],[5,1],[5,4]],
		'walls': [[1,4],[1,5],[2,1],[3,4],[4,2],[4,4]],
		'dim': [5,5],
		'exit': [5,5],
		'spawn': [1,3]
	},
	{ 'boxes': [[2,4],[2,2],[1,2],[3,4],[2,3],[3,1]],
		'walls': [[3,3],[2,5],[1,5]],
		'dim': [3,5],
		'exit': [3,5],
		'spawn': [1,1]
	},
	{ 'boxes': [[1,3],[6,4],[3,4],[6,2],[4,3],[5,5],[6,3],[1,4],[2,5],[4,2],[2,3],[3,3],[3,1],[6,5],[4,5],[6,1],[3,5],[7,2]],
		'walls': [[2,1],[4,1],[7,5],[3,2],[7,1],[5,3],[7,3],[4,4],[5,2]],
		'dim': [7,5],
		'exit': [5,1],
		'spawn': [1,2]
	},
	{ 'boxes': [[4,1],[1,4],[3,1],[7,3],[1,3],[3,2],[5,2],[6,3],[2,5],[5,4],[2,3],[5,3],[2,4],[6,4],[6,1],[3,5],[7,2],[6,5],[7,1],[5,1]],
		'walls': [[4,5],[7,5],[3,3],[4,3],[5,5],[6,2],[1,5],[3,4]],
		'dim': [7,5],
		'exit': [7,4],
		'spawn': [1,2]
	},
	{ 'reflectors': [[3,3,1],[3,4,3]],
		'walls': [[5,1]],
		'targets': [[5,5]],
		'dim': [5,5],
		'spawn': [1,2],
		'lasers': [[1,1,'r']],
		'exit': [5,3]
	},
	{ 'reflectors': [[5,3,1]],
		'boxes': [[5,1]],
		'walls': [[4,1],[4,2],[4,4]],
		'targets': [[7,3]],
		'dim': [7,4],
		'spawn': [2,2],
		'lasers': [[1,1,'d']],
		'exit': [7,4]
	}
];
