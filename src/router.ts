import {initHome} from "./scenes/home";
import {initHistory} from "./scenes/history";

const routes = [
    {
        path: /\/home/,
        component: initHome
    },
    {
        path: /\/history/,
        component: initHistory
    }
];

export function initRouter(container: HTMLElement) {

    function goTo(path: string) {
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route: string) {
    
        console.log(`handleRoute -->| ${route} |<--`);
    
        for(const r of routes) {
    
            if(r.path.test(route)) {
                const el = r.component({goTo: goTo});    
                container.firstChild?.remove();    
                container.appendChild(el);
            }
        }
    }

    location.pathname == "/" ? goTo("/home") : handleRoute(location.pathname);
    window.onpopstate = () => handleRoute(location.pathname);
}
