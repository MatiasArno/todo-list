import { initRouter } from "./router";
import { initFormEl } from "./components/add-item-form";
import { initItemsListEl } from "./components/items-list";

(function main() {

    const root = document.querySelector(".root") as HTMLElement;

    initRouter(root);
    initFormEl();
    initItemsListEl();
})();