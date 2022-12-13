import { state } from "../../state";

export function initItemsListEl() {

    class ItemsList extends HTMLElement {
        shadow = this.attachShadow({ mode: "open" });
        constructor() {
            super();
        }

        connectedCallback() {                   // Se invoca cada vez que el custom element es añadido un documento.
            state.subscribe(() => {
                this.render();
            });
        }

        render() {
            const list = state.getState().list;
            const date = new Date();
            const style = document.createElement("style");

            style.textContent = `
            * {
                box-sizing: border-box;
            }
            
            .items-list-item {
                display: flex;
                width: 100%;
                height: 63px;
                padding: 0;
                margin: 0 0 7.2px 0;
                font-family: 'Roboto', sans-serif;
                background-color: white;
            }

            .check {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 63px;
                height: 100%;
                background-color: steelblue;
                color: white;
                font-size: 2.07em;
                font-weight: 900;
            }

            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 0 0 18px;
                font-weight: bold;
            }

            .date {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 18px 0 0;
                text-align: end;
                margin-left: auto;
            }
            `;

            this.shadow.innerHTML = `
                ${list.map((item: any) => {
                return `<div class="items-list-item">
                                <div class="check">✓</div>
                                <p class="item">${item}</p>
                                <p class="date">${`${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()} <br> 
                                                    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
                            </div>`
            }).join("")}
            `;

            this.shadow.appendChild(style);
        }
    }

    customElements.define("items-list", ItemsList);
}