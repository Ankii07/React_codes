import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Suspense } from 'react'

// lazyloading ki jurrort tab padti hai jab humare application  mai bhut sari pages ho jati hai
// aur wh sare pages bhut hi lengthy ho jate hai bhut hi size ke ho jate hai

// vite kya krta hai ki har ek file ko alg alg request dalta hai unhe kholta hai development mode mai 
// yh parcel aur create react app nhi hota hai agr vite mai build krke khole to ek hi file ko load krega..

// production mode mai run krne ka matlb hai ki jb hum apne application ko deploy kr dete hai uske baad kaise run krega..

// npm build krne ka command hota hai--> npm run build
// aur ek folder bnta hai dist jo sbhi file rakhta hai..

// agr hume production mode mai run krwana hai apne local host mai hi to uska command hai--> npm run preview

// lazy load ka mtlb hai jb user us page pe jayega tabhi us page ko load krenge prehand load krwa ke nhi rakhenge jaise
// ki bhutp krwa rakha hai..
// yh optimize krne mai bhut help krta hai lazy loading

// suspense mai ek parameter milta hai fallback jo ki agr wh page loading hone mai time lgta hai 
// jb tak load na ho jaye tb tk wh dikhao just like shimmer effect....

// agr export defult se na kre lazy loading ke waqt to error aayegii..
function App() {
  return (
    <>
      <Header />
      <main className="py-4 px-4 md:px-8">
      <Suspense fallback = {<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
      </main>
    </>
  )
}

export default App
