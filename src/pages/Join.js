import React from 'react'
import Menu from '../components/Menu'
import Bloco from '../components/Bloco'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import './Join.css'

export default function Join(props) {
    return (
        <div className="form-container">
            <Menu active={2} /> {/*ativando o segundo item do menu*/}
            <div className="form-content">
                <Bloco>
                    <h1>Don't use  paper, the tecnoly can help you</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <form>
                        <input type="text" placeholder="type your name" />
                        <input type="mail" placeholder="type your e-mail" />
                        <button type="submit">Subscribe now</button>
                        {/*<a href="/">Learn thermes</a>*/}
                    </form>
                    <div class="btn__container">
                        <a href="/" className="btn">
                            <i>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </i>
                            <span>Share on Instagram Story</span>
                        </a>
                    </div>

                </Bloco>
            </div>
        </div>
    )
}