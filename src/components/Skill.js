class Skill extends HTMLElement {
    constructor() {
        super()
        this.name = ""
        this.description = ""
        this.image = ""
    }
    
    connectedCallback() {
        this.name = this.getAttribute("name")
        this.description = this.getAttribute("description")
        this.image = this.getAttribute("image")
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="skill">
                <img src="${this.image}"/>
                <div class="skill-description">
                    <h1>${this.name}</h1>
                    <p>${this.description}</p>
                </div>
            </div>
        `
    }
}

customElements.define("skill-component", Skill)