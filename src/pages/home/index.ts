import "./styles.css";
import Page from "pages/Page";

// root level config.js
declare var config;

var homePage;

export function initHome() {
    homePage = new Page();
    homePage.setClassName("headline");
    homePage.setContent(config.headline);
    homePage.mountTo(document.body);
}

export function showHome() {
    homePage.show();
}

export function hideHome() {
    homePage.hide();
}