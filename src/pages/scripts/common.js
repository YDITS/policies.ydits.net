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
    #headerElement = null;

    /**
     * @type {HTMLElement | null}
     */
    #footerElement = null;

    /**
     * @type {HTMLElement | null}
     */
    #headerMenuButtonElement = null;

    /**
     * @type {HTMLElement | null}
     */
    #headerMenuElement = null;

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
        this.#headerElement = document.querySelector("header");
        this.#footerElement = document.querySelector("footer");
        this.#loadCommonElements();
        this.#headerMenuButtonElement = document.getElementById("headerMenuButton");
        this.#headerMenuElement = document.getElementById("headerMenu");
    }

    /**
     * @returns {void}
     */
    #loadCommonElements() {
        this.render.build({
            target: this.#headerElement,
            children: this.#header(),
        });

        this.render.build({
            target: this.#footerElement,
            children: this.#footer(),
        });
    }

    /**
     * @param {Event} event
     * @returns {void}
     */
    #onClickHeaderMenuButton(event) {
        this.#headerMenuButtonElement.classList.toggle("active");
        this.#headerMenuElement.classList.toggle("active");
    }

    /**
     * @returns {HTMLElement[]}
     */
    #header() {
        const { $div, $nav, $ul, $li, $a, $span, $button, $img } = this.render;

        const headerMenuItem = (href, title) => {
            return $li({
                className: "header-menu__item",
                children: [
                    $a({
                        href: href,
                        children: [
                            $span({
                                textContent: title,
                            }),
                            $span({
                                className: "material-symbols-outlined",
                                textContent: "chevron_right",
                            }),
                        ],
                    }),
                ],
            });
        }

        return [
            $div({
                className: "header-wrapper",
                children: [
                    $a({
                        id: "headerLogo",
                        className: "header-logo",
                        href: "/",
                        children: [
                            $img({
                                className: "header-logo__image",
                                src: "https://cdn.ydits.net/images/ydits-logos/ydits_logo_transparent.png",
                                alt: "YDITS Logo image",
                            }),
                            $span({
                                className: "header-logo__text",
                                textContent: "ポリシー",
                            }),
                        ],
                    }),
                    $button({
                        id: "headerMenuButton",
                        className: "header-menu-button",
                        onClick: (event) => this.#onClickHeaderMenuButton(event),
                        children: [
                            $span({
                                className: "material-symbols-outlined open",
                                textContent: "menu",
                            }),
                            $span({
                                className: "material-symbols-outlined close",
                                textContent: "close",
                            }),
                        ],
                    }),
                ],
            }),
            $div({
                id: "headerMenu",
                className: "header-menu",
                children: [
                    $nav({
                        className: "header-menu__nav",
                        children: [
                            $ul({
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
        const { $div, $span } = this.render;

        return [
            $div({
                className: "footer-wrapper",
                children: [
                   $span({
                        innerHTML: "&copy; よね/Yone",
                    }),
                ],
            }),
        ]
    }
}

new Page();
