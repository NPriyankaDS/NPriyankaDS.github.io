// A quiet, deterministic "knowledge graph" field: nodes connected by edges,
// a few pulsing gently. Ties the hero visual to the actual subject matter
// (Neo4j / RAG / embeddings) instead of a generic gradient blob.
const nodes = [
  { x: 640, y: 60 }, { x: 760, y: 130 }, { x: 700, y: 230 },
  { x: 830, y: 260 }, { x: 900, y: 150 }, { x: 950, y: 320 },
  { x: 620, y: 320 }, { x: 780, y: 380 }, { x: 880, y: 60 },
  { x: 1000, y: 220 }, { x: 560, y: 200 }, { x: 1020, y: 90 },
]

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 4], [3, 5], [2, 6],
  [3, 7], [6, 7], [4, 8], [4, 9], [5, 9], [0, 10], [2, 10],
  [4, 11], [8, 11],
]

const pulseIdx = new Set([1, 3, 4, 9])

export default function GraphField() {
  return (
    <svg
      className="hero-graph"
      viewBox="0 0 1100 420"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y} r={pulseIdx.has(i) ? 3 : 2.2}
          className={pulseIdx.has(i) ? 'pulse' : ''}
        />
      ))}
    </svg>
  )
}
