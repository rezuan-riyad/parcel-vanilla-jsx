/** @jsx dom */
import dom from '../lib/dom'
import './styles/main.css'
import Nav from './components/Nav'
import Showcase from './components/Showcase'
import Products from './components/Products'

const app = document.getElementById("app")
app.appendChild(Nav)
app.appendChild(Showcase)
app.appendChild(Products)