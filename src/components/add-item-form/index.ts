import { state } from "../../state";

export function initFormEl() {

    class AddItemForm extends HTMLElement {

        shadow = this.attachShadow({mode: 'open'});

        constructor() {
            super();
            this.render();
        }

        connectedCallback() {
            const form = this.shadow.querySelector(".add-item-form") as HTMLFormElement;
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const formContent = e.target as HTMLFormElement;
                state.addItem(formContent.item.value);
                formContent.item.value = "";
            });
        }

        render() {
            const style = document.createElement("style");

            style.textContent = `
                * {
                    box-sizing: border-box;
                    border: none;
                    margin: 0;
                    padding: 0;
                }
                .add-item-form {
                    display: flex;
                    height: 100%;
                }

                .add-item-field {
                    padding: 0 18px;
                    width: calc(100% - 63px);
                }

                .add-item-btn {
                    width: 63px;
                    height: 100%;
                    background-color: tomato;
                    color: white;
                    font-size: 3.6em;
                }
            `;
            
            this.shadow.innerHTML = `
                <form class="add-item-form">
                    <input type="text" name="item" class="add-item-field" placeholder="Type new item...">
                    <button type="submit" class="add-item-btn">+</button>
                </form>
            `;
            
            this.shadow.appendChild(style);
        }
    }

    customElements.define("add-item-form", AddItemForm);
}