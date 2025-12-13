/**!
 * 
 * YDITS Policies Website
 * 
 * Copyright (C) よね/Yone
 * 
 */

import { Render } from "https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs";


class Page {
    constructor() {
        this.render = new Render();
        this.#setupEventListeners();
    }


    /**
     * @type {HTMLElement | null}
     */
    #_headerElement = null;


    /**
     * @type {HTMLElement | null}
     */
    #_footerElement = null;


    /**
     * @type {HTMLElement | null}
     */
    #_headerMenuButtonElement = null;


    /**
     * @type {HTMLElement | null}
     */
    #_headerMenuElement = null;


    /**
     * @returns {HTMLElement | null}
     */
    #headerElement() {
        if (this.#_headerElement !== HTMLElement) {
            this.#_headerElement = document.querySelector("header");
        }

        return this.#_headerElement;
    }


    /**
     * @returns {HTMLElement | null}
     */
    #footerElement() {
        if (this.#_footerElement !== HTMLElement) {
            this.#_footerElement = document.querySelector("footer");
        }

        return this.#_footerElement;
    }


    /**
     * @returns {HTMLElement | null}
     */
    #headerMenuButtonElement() {
        if (this.#_headerMenuButtonElement !== HTMLElement) {
            this.#_headerMenuButtonElement = document.getElementById("headerMenuButton");
        }

        return this.#_headerMenuButtonElement;
    }


    /**
     * @returns {HTMLElement | null}
     */
    #headerMenuElement() {
        if (this.#_headerMenuElement !== HTMLElement) {
            this.#_headerMenuElement = document.getElementById("headerMenu");
        }

        return this.#_headerMenuElement;
    }

    /**
     * @returns {void}
     */
    #setupEventListeners() {
        window.addEventListener("error", (event) => this.#onUnhandledError(event));
        document.addEventListener("DOMContentLoaded", (event) => this.#onDOMContentLoaded(event));
    }


    /**
     * @param {ErrorEvent} event
     * @returns {void}
     */
    #onUnhandledError(event) {
        console.error(event.error);
    }


    /**
     * @param {Event} event
     * @returns {void}
     */
    #onDOMContentLoaded(event) {
        this.#initializePage();
    }


    /**
     * @returns {void}
     */
    #initializePage() {
        this.#loadCommonElements();
    }


    /**
     * @returns {void}
     */
    #loadCommonElements() {
        this.render.build({
            target: this.#headerElement(),
            children: this.#header(),
        });

        this.render.build({
            target: this.#footerElement(),
            children: this.#footer(),
        });
    }


    /**
     * @param {Event} event
     * @returns {void}
     */
    #onClickHeaderMenuButton(event) {
        this.#headerMenuButtonElement().classList.toggle("active");
        this.#headerMenuElement().classList.toggle("active");
    }


    /**
     * @returns {HTMLElement[]}
     */
    #header() {
        const headerMenuItem = (href, title) => {
            return this.render.$li({
                className: "header-menu__item",
                children: [
                    this.render.$a({
                        href: href,
                        children: [
                            this.render.$span({
                                textContent: title,
                            }),
                            this.render.$span({
                                className: "material-symbols-outlined",
                                textContent: "chevron_right",
                            }),
                        ],
                    }),
                ],
            });
        }


        return [
            this.render.$div({
                className: "header-wrapper",
                children: [
                    this.render.$a({
                        id: "headerLogo",
                        className: "header-logo",
                        href: "/",
                        children: [
                            this.render.$img({
                                className: "header-logo__image",
                                src: "https://cdn.ydits.net/images/ydits-logos/ydits_logo_transparent.png",
                                alt: "YDITS Logo image",
                            }),
                            this.render.$span({
                                className: "header-logo__text",
                                textContent: "ポリシー",
                            }),
                        ],
                    }),
                    this.render.$button({
                        id: "headerMenuButton",
                        className: "header-menu-button",
                        onClick: (event) => this.#onClickHeaderMenuButton(event),
                        children: [
                            this.render.$span({
                                className: "material-symbols-outlined open",
                                textContent: "menu",
                            }),
                            this.render.$span({
                                className: "material-symbols-outlined close",
                                textContent: "close",
                            }),
                        ],
                    }),
                ],
            }),
            this.render.$div({
                id: "headerMenu",
                className: "header-menu",
                children: [
                    this.render.$nav({
                        className: "header-menu__nav",
                        children: [
                            this.render.$ul({
                                className: "header-menu__list",
                                children: [
                                    headerMenuItem("/", "ホーム"),
                                    headerMenuItem("/terms/webapp/", "YDITS for Web 利用規約"),
                                    headerMenuItem("/privacy/site/", "YDITS ウェブサイト プライバシーポリシー"),
                                    headerMenuItem("/terms/project/", "YDITS Project メンバー特約"),
                                    headerMenuItem("/privacy/project/", "YDITS Project プライバシーポリシー"),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ]
    }


    /**
     * @returns {HTMLElement[]}
     */
    #footer() {
        return [
            this.render.$div({
                className: "footer-wrapper",
                children: [
                    this.render.$span({
                        innerHTML: "&copy; よね/Yone",
                    }),
                ],
            }),
        ]
    }
}

new Page();
