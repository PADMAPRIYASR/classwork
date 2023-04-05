import React from 'react'

export default function Day5() {
    var fruits=["apple","orange","grapes","watermelon"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"Sasi"},{id:2,name:"Padma"},{id:3,name:"Nitya"},]
  return (
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    </div>
  )
}