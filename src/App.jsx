// App.jsx

import './App.css'
import { store } from './Store'
import { useSnapshot } from 'valtio'
import Scene1 from './scenes/scene1'
import Scene2 from './scenes/scene2'
import Scene3 from './scenes/scene3'
import Scene1OL from './overlays/scene1ol'


const App = () => {
  const snap = useSnapshot(store)

  const id = snap.scene

  if (id != 1) {
    store.image = ''
  }

  if (id === 1) {
    return <>
      <Scene1 />
      <Scene1OL />
    </>
  } else if (id === 2) {
    return <Scene2 />
  } else {
    return <Scene3 />
  }
}

export default App
