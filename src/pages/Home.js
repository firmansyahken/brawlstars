import "../components/Hero.js"
import "../components/Card.js"
import { BASE_API } from "../utils/Constant.js"

export default class Home {
    async fetchData() {
        const fetching = await fetch(BASE_API)
        const response = await fetching.json()
        return response.list
    }

    async render() {
        const data = await this.fetchData()
        let templateCard = ""
        data.map((hero) => {
            templateCard += `<card-component
                uid="${hero.id}"
                img="${hero.imageUrl}"
                name="${hero.name}"
                class="${hero.class.name}"
                rare="${hero.rarity.name}"
                color="${hero.rarity.color}"
            >
            </card-component>`
        })

        return `
            <div class="wrapper">
                <hero-component></hero-component>
                <div class="list-hero">
                    ${templateCard}
                </div>
            </div>`
        }
}