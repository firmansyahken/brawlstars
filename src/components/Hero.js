class Hero extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <h1>Brawlstar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia, numquam est architecto placeat sequi recusandae quibusdam aliquam tempore accusantium.</p>
            </div>
        `
    }
}

customElements.define("hero-component", Hero)