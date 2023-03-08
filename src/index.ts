import { createSelection } from 'bun-promptx'

const result = createSelection([
  { text: 'cpu', description: 'benchmark cpu' },
  { text: 'acc', description: 'attempt to benchmark software acceleration' },
  { text: 'gpu', description: 'attempt to benchmark gpu' },
  { text: 'exhaustive', description: 'run cpu + acc + gpu benchmarks' },
], {
  headerText: 'select benchmark type',
  perPage: 5,
})

console.log(result)