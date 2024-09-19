import React from 'react'
import './StyleSheet.css'
import groww from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Group 41.png'
import hed from 'L:\\Html\\React Folder\\my-app\\src\\Components\\Build The Community.png'
import huddle from 'L:/Html/React Folder/my-app/src/Components/LogoImage.png'

export default function HomePage() {
    return (
        <div id='hero'>
            <div id='Heroinn'>


                <div id="header">
                    <img src={huddle} alt="huddle" />
                    <div id='tryfree'><a>Try it Free</a></div>
                </div>

                <div id="contect1">

                    <div id='single'>
                        <h1>Bulid the Community Your Fans will love</h1>
                        <p >Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
                        <div className='getstart'><a>Get Started for Free</a></div>
                    </div>


                    <div id='cimage'>
                        <img src={groww} alt='noimage'></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
