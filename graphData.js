//graphData.js

export default {
  nodes: [
    { id: 'A', group: 1 },
    { id: 'B', group: 2 },
    { id: 'C', group: 3 },
    { id: 'D', group: 1 }
  ],
  links: [
    { source: 'A', target: 'B' },
    { source: 'A', target: 'C' },
    { source: 'B', target: 'D' }
  ]
};
