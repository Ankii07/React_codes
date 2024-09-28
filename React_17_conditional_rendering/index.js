// to import createRoot code from react-dom via client
import {createRoot} from 'react-dom/client'
// to import App component from app.js file
import App from './App'

const root = createRoot(document.getElementById('root'))
// app simply ek string bhi render krwa kra skte ho
// root.render('radfad')

root.render(<App root={root}/>)

