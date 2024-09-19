import React from 'react'
import './StyleSheet.css'
import ondimg from 'L:\\Html\\React Folder\\my-app\\src\\Components\\grow_together.png'
import twoimg from 'L:\\Html\\React Folder\\my-app\\src\\Components\\grow_two.png'
import threeimg from 'L:\\Html\\React Folder\\my-app\\src\\Components\\grow_three.png'

const user=[
  {img:ondimg,hess:"Grow Together"},
  {img:twoimg,hess:"Flowing Conversations"},
  {img:threeimg,hess:"Your User"}
];
export default function ()
{
  return (
    <div id='body11'>
   {user.map((user)=>(
          <div id='inbody1'>
                <div id='half1'><img src={user.img}></img></div>
                <div id='half2'><h1>{user.hess}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, accusamus repudiandae. Esse alias accusamus cupiditate ipsum dolor facere nesciunt dignissimos?</p>
                </div>
          </div>
   ))}
</div>
  )
}
