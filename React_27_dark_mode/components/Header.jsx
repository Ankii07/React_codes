import { useState } from "react"

export default function Header({theme}) {
  // kyuki variable hr ek click pe changed chahiye icon mai isiliye usestate ka use krenege
  // aur wh variable ko set krke render automatically krta rhta hai
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('IsDarkMode')))
  const [isDark, setIsDark] = theme
  //  es dark value ka use krke hum add ye remove kr rhe hai
  // yh ek achha trika nhi hai hum react ke andr dom ko manipultate nhi krte hai
  // if(isDark){
  //   document.body.classList.add('dark')
  // }else{
  //   document.body.classList.remove('dark')
  // }
  // direct jo locale storage se jo value aayegi wh string aayegi aur hume to chahiye boolean mai kyuki
  // uska use krke hi apne classname ko set krenge iske liye hume use krna hoga JSON.parse jisme json capital mai rhega
  // aur state mai update kr denge
  console.log(JSON.parse(localStorage.getItem('IsDarkMode')));
  return (
    <header className={`header-container ${isDark ? 'dark':''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          document.body.classList.toggle('dark')
          setIsDark(!isDark)
          // ab hum chahte hai ki refresh krne pr bhi whi mode rhe hai jaise ki humne chhora tha
          // iske liye hum localestorage ka use krenge us mai mode ki value store krke rkhenge
          localStorage.setItem('IsDarkMode', !isDark)
        }}>
        {/* dynamically setting the classname */}
         <i className={`fa-solid fa-${isDark ? 'sun':'moon'}`}></i>
          &nbsp;&nbsp;{isDark? 'Light':'Dark'} Mode
        </p>
      </div>
    </header>
  )
}
