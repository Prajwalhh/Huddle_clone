import React from 'react'
import fimg from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Object.png'
import loc from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Group 34.png'
import call from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Group 21.png'
import email from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Group 12.png'
import face from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Group 17.png'
import bird from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Group 16.png'
import insta from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Group 15.png'

export default function
    () {
    return (
        <div id='kalla'>
           
            <div id='ragu'>
                <h2 style={{padding:'30px'}}>Ready TO Build Your Community ?</h2>
                <div id='butt' className='getstart'><a >Get Started for Free</a></div>
                
            </div>
        <div id='footerdiv'>
            <div id='footerin'>
                <div id='flogo' className='benni'>
                    <div>
                        <img id='fimgg' src={fimg} alt='noimg' ></img>
                    </div>
                    <div>
                        <img id='fimgg'  src={loc} alt='noimg' ></img>
                        <a style={{marginLeft:'-12px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga suscipit</a>
                    </div>
                    <div>
                        <img id='fimgg' src={call} alt='noimg' ></img>
                        <a>93346562389</a>
                    </div>
                    <div>
                        <img id='fimgg' src={email} alt='noimg' ></img>
                        <a>gmai.com@123</a>
                    </div>
                </div>



                <div id='fabout' className='benni'>
                    <div><a>About</a></div>
                    <div><a>What We Do</a></div>
                    <div><a>FAQ</a></div>
                </div>


                <div id='fcareer' className='benni'>
                    <div><a>Career</a></div>
                    <div><a>Blog</a></div>
                    <div><a>Contact Us</a></div>
                </div>



                <div id='fcontact' className='benni'>
                    <div id='b1'><img id='ll' src={face}></img></div>
                    <div id='b2'><img id='ll' src={bird}/></div>
                    <div id='b3' ><img id='ll' src={insta}/></div>
                </div>
            </div>
        </div>
        </div>
    )
}
