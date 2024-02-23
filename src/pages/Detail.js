import "../components/Profile.js"
import "../components/Skill.js"
import { BASE_API } from "../utils/Constant.js"
import { ScrollToTop } from "../utils/ScrollToTop.js"

export default class Detail {
    constructor(id) {
        this.uid = id
        ScrollToTop()
    }

    async fetchData() {
        const fetching = await fetch(BASE_API+`/${this.uid}`)
        const response = await fetching.json()
        return response
    }

    async render(){
        const data = await this.fetchData()
        let templateStarpower = ""
        let templateGadget = ""
        
        data.starPowers.map(star => {
            templateStarpower += `
                <skill-component
                   name="${star.name}"
                   description="${star.description}"
                   image="${star.imageUrl}"
                ></skill-component>
            `
        })

        data.gadgets.map(gadget => {
            templateGadget += `
                <skill-component
                   name="${gadget.name}"
                   description="${gadget.description}"
                   image="${gadget.imageUrl}"
                ></skill-component>
            `
        })

        return `
            <div class="wrapper">
                <profile-component
                    name="${data.name}"
                    class="${data.class.name}"
                    rare="${data.rarity.name}"
                    color="${data.rarity.color}"
                    description="${data.description}"
                    image="${data.imageUrl2}"
                ></profile-component>
                <h1 class="detail-title">Star Power</h1>
                <div class="detail-layout">
                    ${templateStarpower}
                </div>
                <h1 class="detail-title">Gadget</h1>
                <div class="detail-layout">
                    ${templateGadget}
                </div>
            </div>`
    }
}
    