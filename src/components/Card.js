import { Navigate } from "../../app/Router/Navigate.js"

class Card extends HTMLElement {
    constructor(){
        super()
        this.uid = 0
        this.img = ""
        this.name = ""
        this.class = ""
        this.rare = ""
        this.color = ""
        this.handleClick = this.handleClick.bind(this)
    }
    
    connectedCallback() {
        this.uid = this.getAttribute("uid")
        this.img = this.getAttribute("img")
        this.name = this.getAttribute("name")
        this.class = this.getAttribute("class")
        this.rare = this.getAttribute("rare")
        this.color = this.getAttribute("color")
        this.render()
    }

    handleClick() {
        let path = "#detail/"+this.uid
        Navigate(path)
    }

    render() {
        this.innerHTML = `
            <div class="card">
                <img src="${this.img}" alt="hero"/>
                <div class="card-content">
                    <span style="background-color: ${this.color}">${this.rare}</span>
                    <p>${this.name}</p>
                    <p>${this.class}</p>
                </div>
            </div>
        `
        this.querySelector(".card").addEventListener("click", this.handleClick)
    }
} 

customElements.define("card-component", Card)