// is file ko .jsx krne ki jurrort nhi hai kyuki yha se hum koi jsx pass nhi kr rhe hai

// yh convention hota hai ki jo bhi hook hota hai usko named export krte hai.
import React, { useState } from 'react'

// yha pe call back yh btayega ki kis property ki basis pe hum filter krna chahte hai 
// tile, ke base pe ya category ke base pe e.t.c
export function useFilter(dataList, callback) {
 const [query, setQuery] = useState('')
  
 console.log(callback); //(data) => data.category
//  callback function hai jo ki asa per defination ja smen expense data denge to uska .catgory propety wali value de dega
// yhi callback designed hota data ki title property ko dene ke liye to  uske tilte mai search kr rhe hote isse hume dynamacity mil rhi hai
 const filteredData = dataList.filter((data)=>{
    // kyuki initialy category empty string state mai hai aur kyuki sare string hi empty string include krte hi hai isiliye 
    // filtereddata sare string ko contain krega..
    return callback(data).toLowerCase().includes(query)
  })
   
//   console.log(data);
//   data.category.toLowerCase().includes(category)

return [filteredData, setQuery]
}
