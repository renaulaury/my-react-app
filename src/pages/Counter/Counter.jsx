import { useReducer } from 'react'

const initialState = { count: 0 }
const STEP = 0.6
const MIN = -5
const MAX = 16

// Corrige les erreurs d'arrondi des décimaux (0.6 + 0.6 + 0.6 = 1.7999999999999998)
// et bloque le compteur entre MIN et MAX
function fix(number) {
  return Math.min(MAX, Math.max(MIN, parseFloat(number.toFixed(10))))
}

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: fix(state.count + STEP) }
    case 'DECREMENT':
      return { count: fix(state.count - STEP) }
    case 'RESET':
      return initialState
    case 'SQUARE':
      return { count: fix(state.count * state.count) }
    case 'CEIL':
      return { count: fix(Math.ceil(state.count)) }
    default:
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <div>
      <h1>{state.count}</h1>
      {state.count === MIN && <p>Step bas atteint</p>}
      {state.count === MAX && <p>Step haut atteint</p>}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
      <button onClick={() => dispatch({ type: 'SQUARE' })}>carré</button>
      <button onClick={() => dispatch({ type: 'CEIL' })}>arrondi sup.</button>
    </div>
  )
}
