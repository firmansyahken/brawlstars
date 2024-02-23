class Profile extends HTMLElement {
    constructor() {
        super()
        this.name = ""
        this.class = ""
        this.rare = ""
        this.color = ""
        this.description = ""
        this.image = ""
    } 
    
    connectedCallback() {
        this.name = this.getAttribute("name")
        this.class = this.getAttribute("class")
        this.rare = this.getAttribute("rare")
        this.color = this.getAttribute("color")
        this.description = this.getAttribute("description")
        this.image = this.getAttribute("image")
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img src="${this.image}" alt="hero"/>
                </div>
                <div class="profile-description">
                    <span style="background-color: ${this.color}">${this.rare}</span>
                    <h1>${this.name}</h1>
                    <p>${this.class}</p>
                    <p>${this.description}</p>
                </div>
            </div>
        `
    }
}

customElements.define("profile-component", Profile)