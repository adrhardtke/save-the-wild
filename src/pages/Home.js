import React from 'react';
import Menu from '../components/Menu'
import Bloco from '../components/Bloco.js'

import arvore from '../assets/tree-animated.gif'
import dropboxpaper from '../assets/dropbox-paper.svg'
import evernote from '../assets/evernote.svg'
import googlekeep from '../assets/google-keep.svg'
import notes from '../assets/notes.svg'
import onenote from '../assets/one-note.svg'
import simplenote from '../assets/simplenote.svg'

import './Home.css'
import './HomeResponsive.css'

export default function App() {
    return (
        <div className="home-container">
            <Menu active={1} /> {/*ativando o primeiro item do menu*/}
            <div className="container">
                <div className="home-content">

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                            <header>
                                <h1>don't<br></br>use<br></br>paper</h1>
                                <img src={arvore} alt="Save the wild" className="img-fluid" />
                                <h1>save<br></br>the<br></br>wild</h1>

                            </header>
                        </div>
                    </div>
                    <div className="row">


                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="bloco">
                                <Bloco>
                                    <h2>Don't use  paper, the tecnoly can help you</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                    <p>
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                </p>
                                    <div className="apps">
                                        <a href="/">
                                            <img src={dropboxpaper} alt="Dropbox paper" />
                                        </a>
                                        <a href="/">
                                            <img src={googlekeep} alt="Google Keep" />
                                        </a>
                                        <a href="/">
                                            <img src={onenote} alt="Microsoft one note" />
                                        </a>
                                        <a href="/">
                                            <img src={evernote} alt="Evernote" />
                                        </a>
                                        <a href="/">
                                            <img src={simplenote} alt="Simple note" />
                                        </a>
                                        <a href="/">
                                            <img src={notes} alt="Apple Note" />
                                        </a>
                                    </div>
                                </Bloco>

                            </div>
                        </div>
                        <div className="col-12 col-sm12 col-md-6 col-lg-6 col-xl-6">
                            <div className="bloco">
                                <Bloco>
                                    <h2>Don't use  paper, the tecnoly can help you</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Bloco>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}
