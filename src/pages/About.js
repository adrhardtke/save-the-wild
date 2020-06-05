import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import Menu from '../components/Menu'
import Bloco from '../components/Bloco'

import './About.css'
import './AboutResponsive.css'

export default function About(props) {
    return (
        <div className="about">
            <Menu active={3} />
            <div className="about-bloco-container">
                <Bloco>
                    <div className="about-bloco-content">
                        <div className="about-bloco">
                            <h1>1 Don't use  paper, the tecnoly can help you</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                        <div className="about-bloco">
                            <h1>2 Don't use  paper, the tecnoly can help you</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                        <div className="about-bloco">
                            <h1>3 Don't use  paper, the tecnoly can help you</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div class="follow">
                        <a href="/">
                            <i>
                                <FontAwesomeIcon icon={faInstagram} />
                            </i>follow us on Instagram
                        </a>
                    </div>
                </Bloco>
            </div>
        </div>
    )
}