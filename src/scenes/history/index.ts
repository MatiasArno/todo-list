export function initHistory(params: any) {

    const div = document.createElement("div");

    div.innerHTML = `
        <h1>HISTORY</h1>
    `;

    // const btnEl = div.querySelector(".btn-start") as HTMLElement;
    // btnEl.addEventListener("click", () => params.goTo("/step-1"));

    return div;    
}