export function initHome(params: any) {

    const div = document.createElement("div");

    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-between";
    div.style.height = "100%";

    div.innerHTML = `
        <items-list class="items-list"></items-list>
        <add-item-form class="add-items"></add-item-form>
    `;

    // const btnEl = div.querySelector(".btn-start") as HTMLElement;
    // btnEl.addEventListener("click", () => params.goTo("/step-1"));

    return div;    
}